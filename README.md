# BoomPortfolio

เว็บไซต์ Portfolio ของ Wisitchai Bunrae และ BoomTech Studio สำหรับนำเสนอผลงานด้าน Full-Stack Architecture, Real-Time Dispatch, Web3 และระบบ Mission-Critical

## เทคโนโลยี

- React 19 และ Vite
- Tailwind CSS
- Lucide React
- Netlify Forms สำหรับแบบฟอร์มติดต่อ
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

โปรเจกต์มีไฟล์ `netlify.toml` กำหนดคำสั่ง build และโฟลเดอร์เผยแพร่ไว้แล้ว เมื่อลิงก์รีโพกับ Netlify ระบบจะ build และเปิดใช้แบบฟอร์ม `consultation` อัตโนมัติ

## โครงสร้างหลัก

- `src/components` — ส่วนประกอบหน้าเว็บ
- `src/data/portfolioData.js` — ข้อมูลโปรไฟล์ ผลงาน และบริการ
- `public` — ไฟล์สาธารณะ เช่น favicon
- `.github/workflows/ci.yml` — ตรวจ lint, test และ build ทุก Pull Request

## ติดต่อ

- Email: contact@boomtech.app
- GitHub: https://github.com/RiderBoom
