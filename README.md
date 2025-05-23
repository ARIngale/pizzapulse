# 🍕 PizzaPulse – Next.js Dashboard with Google Authentication

**Author**: Atharva Ingale

---

## 📌 Overview

**PizzaPulse** is a sleek, server-rendered dashboard built using **Next.js**, featuring secure authentication via **Google OAuth** (powered by NextAuth.js), modern UI with **Tailwind CSS** and **shadcn/ui**, and a protected dashboard experience. The app showcases a responsive table of pizza orders using hardcoded JSON data — no backend required.

---

## 🚀 Getting Started – Run Locally

### 1. **Clone the Repository**

```bash
git clone https://github.com/ARIngale/pizzapulse.git
cd pizzapulse
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Configure Environment Variables**

Create a `.env.local` file in the root of the project and add the following:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```

> ⚠️ Get your credentials from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)  
> 🗝️ Generate a `NEXTAUTH_SECRET` using:
>
> ```bash
> openssl rand -base64 32
> ```

### 4. **Run the Development Server**

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## ✨ Features

- 🔐 Google Sign In/Sign Out with **NextAuth.js**
- 🛡️ Protected Routes (`/dashboard` and `/orders`)
- 📊 Pizza Orders displayed from hardcoded JSON
- 🌙 Light/Dark mode toggle with **next-themes**
- 💅 Fully responsive UI using **Tailwind CSS** and **shadcn/ui**

---

## 📁 Folder Structure Highlights

```
/app
  /dashboard       → Protected dashboard page
  /orders          → Protected orders page (pizza table)
  /api/auth        → NextAuth.js handler
/components        → Shared components (UI, Navbar, etc.)
/lib               → Utility functions
/public            → Static assets
/styles            → Global CSS
```

---

## 💡 Assumptions & Challenges

- No database used; pizza orders are stored in a local JSON array.
- Assumed a focus on front-end authentication, UI/UX, and route protection.
- Managing `next-themes` with dynamic layouts posed minor challenges during hydration.

---

## 📦 Third-Party Libraries Used

| Package               | Purpose                                         |
|-----------------------|-------------------------------------------------|
| **Tailwind CSS**      | Utility-first CSS framework for fast UI styling |
| **shadcn/ui**         | UI components built on Radix UI and Tailwind    |
| **NextAuth.js**       | Authentication library used for Google OAuth    |
| **next-themes**       | Theme switching (light/dark mode)               |
| **lucide-react**      | Open-source icon library                        |
| **clsx**              | Utility for conditional classNames              |
| **tailwind-variants** | Manage component variants with Tailwind CSS     |
