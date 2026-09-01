create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
revoke all on table public.admin_users from anon, authenticated;

create or replace function public.is_chat_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_chat_admin() from public, anon;
grant execute on function public.is_chat_admin() to authenticated;

create policy "Admins read conversations" on public.conversations
for select to authenticated using ((select public.is_chat_admin()));

create policy "Admins update conversations" on public.conversations
for update to authenticated using ((select public.is_chat_admin()))
with check ((select public.is_chat_admin()));

create policy "Admins read messages" on public.messages
for select to authenticated using ((select public.is_chat_admin()));

create policy "Admins send team messages" on public.messages
for insert to authenticated with check (
  (select public.is_chat_admin()) and sender = 'team' and exists (
    select 1 from public.conversations c
    where c.id = conversation_id and c.owner_id = owner_id
  )
);

grant update on table public.conversations to authenticated;

create or replace function public.touch_conversation_from_message()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.conversations set updated_at = new.created_at where id = new.conversation_id;
  return new;
end;
$$;

drop trigger if exists touch_conversation_after_message on public.messages;
create trigger touch_conversation_after_message
after insert on public.messages
for each row execute function public.touch_conversation_from_message();
