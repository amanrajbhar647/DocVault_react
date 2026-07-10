# 🗄️ DocVault – Document Management Platform

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A beautiful **dark-themed Document Management Platform** where users can upload, preview, categorize, search, and manage all their important files in one place.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📁 **Upload Interface** | Drag & drop or click to upload any file type |
| 👁️ **Smart Preview** | Unique preview for each file type — PDF, spreadsheets, waveforms, code, video |
| 🏷️ **Categorization** | Resume, Certificate, Report, Invoice, Photo, Video, Audio, Archive, Code |
| 🔍 **Search & Filter** | Live search + category chips + sort by name/date/size |
| ⭐ **Favorites** | Bookmark important documents with one click |
| 📊 **Dashboard Stats** | Total files, favorites count, file types used, storage size |
| 🌙 **Dark Theme** | Professional dark UI built with Tailwind CSS |
| ⊞ **Grid / List View** | Toggle between card grid and list view |
| 🎨 **28 File Types** | Each file type has unique color, icon, and preview experience |

---

## 🚀 Quick Start

```bash
# Step 1 — Install dependencies
npm install

# Step 2 — Start development server
npm start

# Browser mein open hoga:
# http://localhost:3000

# Step 3 — Production build
npm run build
```

> **Requirements:** Node.js v16+ and npm v8+

---

## 📂 Project Structure

```
docvault/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── App.jsx                 # Main app — state management & routing
│   ├── index.js                # React entry point
│   ├── index.css               # Tailwind CSS + custom component styles
│   │
│   ├── data/
│   │   ├── fileTypes.js        # 28 file type definitions (colors, icons, gradients)
│   │   └── seedData.js         # 28 sample documents for demo
│   │
│   ├── hooks/
│   │   └── useToast.js         # Toast notification hook
│   │
│   └── components/
│       ├── Sidebar.jsx         # Left navigation + categories + user profile
│       ├── UI.jsx              # Topbar, StatsGrid, Legend, FilterRow, Toast
│       ├── DocGrid.jsx         # Document grid view + list view + cards
│       ├── UploadModal.jsx     # Upload dialog with drag & drop + file type picker
│       └── PreviewModal.jsx    # File preview dialog with type-specific previews
│
├── tailwind.config.js          # Tailwind configuration + custom colors
├── postcss.config.js           # PostCSS configuration
└── package.json
```

---

## 🛠️ Tech Stack

| Technology       | Version | Usage                              |
|------------------|---------|------------------------------------|
| **React.js**     | 18.2    | UI Components, Hooks, State        |
| **Tailwind CSS** | 3.4     | Utility-first styling              |
| **JavaScript**   | ES6+    | Logic, filtering, state management |
| **HTML5**        | —       | Drag & drop file upload API        |
| **CSS3**         | —       | Animations, gradients, transitions |

---

## 🎨 Design System

### Color Palette
```css
--vault-bg:      #0b0d14   /* Main background   */
--vault-surface: #12141f   /* Card background   */
--vault-card:    #181b28   /* Footer/hover bg   */
--vault-border:  #232740   /* Borders           */
--vault-accent:  #6366f1   /* Primary purple    */
--vault-accent2: #818cf8   /* Light purple      */
--vault-muted:   #64748b   /* Muted text        */
```

### Fonts
- **Display:** Space Grotesk (headings, logo)
- **Body:** Inter (all UI text)
- **Code:** Fira Code (code previews)

---

## 📋 Supported File Types (28 Types)

| Category  | Extensions |
|-----------|-----------|
| Documents | PDF, DOCX, XLSX, PPTX, TXT |
| Images    | JPG, PNG, GIF, SVG, WEBP |
| Video     | MP4, AVI, MOV |
| Audio     | MP3, WAV, AAC |
| Archives  | ZIP, RAR, 7Z |
| Code      | JS, TS, PY, HTML, CSS, JSON, CSV |

---

## 🔧 Customization

### Add new file type
In `src/data/fileTypes.js`:
```js
myext: {
  label: 'MYEXT',
  icon: '📄',
  bg: 'linear-gradient(135deg, #1a0808, #3d1212)',
  ext: '#ef4444',
  extTxt: '#fff',
  catBg: 'rgba(239,68,68,0.15)',
  catTxt: '#fca5a5'
}
```

### Add new category
In `src/data/fileTypes.js` → `CAT_COLORS`:
```js
MyCategory: { bg:'rgba(99,102,241,0.15)', c:'#a5b4fc' }
```

---

## 📄 License

MIT License — Free to use and modify.

---

⭐ **If you found this helpful, please star the repo!**
