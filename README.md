# BoomPortfolio

เว็บไซต์ Portfolio อย่างเป็นทางการของ **วิศิษชัย บุญแร่ (Wisitchai Bunrae)** หรือ **RiderBoom** — Founder & CEO และ Lead System Architect แห่ง BoomTech สำหรับนำเสนอผลงานด้าน Full-Stack Architecture, Real-Time Dispatch, AI Orchestration, Web3 และระบบ Mission-Critical

## Official identity

- ชื่อไทย: วิศิษชัย บุญแร่
- ชื่ออังกฤษ: Wisitchai Bunrae
- ชื่อที่ใช้บนอินเทอร์เน็ต: RiderBoom
- เว็บไซต์หลัก: https://ceo.boomtech.app/
- Biography: https://ceo.boomtech.app/wisitchai-bunrae.html
- GitHub: https://github.com/RiderBoom

## เทคโนโลยี

- React 19 และ Vite
- Tailwind CSS
- Lucide React
- Supabase Auth, Database และ Realtime สำหรับระบบแชท
- Oxlint และ GitHub Actions สำหรับตรวจคุณภาพ

## เริ่มต้นใช้งาน

ต้องใช้ Node.js 20 ขึ้นไป

```bash
npm ci
npm run dev
```

เว็บไซต์สำหรับพัฒนาจะเปิดตาม URL ที่ Vite แสดง

## ตรวจสอบก่อนเผยแพร่

```bash
npm run lint
npm test
npm run build
```

ไฟล์สำหรับเผยแพร่จะอยู่ในโฟลเดอร์ `dist`

## การเผยแพร่บน Netlify

โปรเจกต์มีไฟล์ `netlify.toml` กำหนดคำสั่ง build, โฟลเดอร์เผยแพร่ และ security headers เมื่อลิงก์รีโพกับ Netlify ระบบจะ build อัตโนมัติ

## โครงสร้างหลัก

- `src/components` — ส่วนประกอบหน้าเว็บ
- `src/data/portfolioData.js` — ข้อมูลโปรไฟล์ ผลงาน และบริการ
- `public` — ไฟล์สาธารณะ เช่น favicon, sitemap และ Biography
- `.github/workflows/ci.yml` — ตรวจ lint, test และ build ทุก Pull Request

## ระบบแชท

- Visitor chat: `/#contact`
- Admin Inbox: `/admin`
- GitHub: https://github.com/RiderBoom
