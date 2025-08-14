# ManageIt — Admin Dashboard

A colorful, accessible, and responsive admin dashboard UI built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Live demo
https://your-vercel-url.vercel.app

## Preview
![Desktop](./screenshots/preview-desktop.png)
![Mobile 1](./screenshots/preview-mobile-1.png)
![Mobile 2](./screenshots/preview-mobile-2.png)

## Overview
ManageIt showcases a production-style dashboard with real-world UX patterns:
- Overview — KPI cards, revenue area chart, category bars, top products, regions.
- Orders — searchable, paginated table + CSV export button.
- Customers — customer table with quick actions.
- Reports — filters (date/compare/channel) + charts and summaries.
- Settings — sidebar navigation, Account, Notifications, Security (2FA & sessions), Billing, Invoices, API keys, Danger zone.

## Features
- Accessibility-first: semantic landmarks, skip link, strong focus styles, good contrast.
- Responsive: mobile → desktop layouts, mobile nav menu.
- Dark mode: toggle ON/OFF.
- Lightweight charts: accessible SVG components (no heavy libs).
- Reusable tables: semantic `<table>` with zebra rows and captions.
- Clean code: comments and clear structure.

## Tech stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- clsx

## Getting started (local)
```bash
git clone https://github.com/Talal609-sudo/manageit-dashboard.git
cd manageit-dashboard
npm install
npm run dev
# open http://localhost:3000
