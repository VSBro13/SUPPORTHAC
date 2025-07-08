# SUPPORT HAC

A modern, student-led community support site for the HAC community. Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui, it offers a mobile-first, lively, and accessible experience for users seeking help, contributing, or joining live sessions.

---

## Features

- **Mobile-first, responsive design**
- **Modern UI/UX** with custom animations (fade, slide, pop, shimmer)
- **Express backend** for secure payment code and session logging
- **Google Sheets integration** for logging contributions and live session requests
- **Reusable components** (Navbar, Hero, Back to Top, etc.)
- **Accessible, SEO-friendly** (robots.txt, alt text, semantic HTML)
- **Easy customization** and open source code

---

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Express](https://expressjs.com/) backend (for code/session logging)
- [Google Sheets API](https://developers.google.com/sheets/api) (optional, for logging)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd SUPPORT-HAC

# Install dependencies
npm install
# or
bun install
```

### Running the App

```sh
# Start the frontend (Vite dev server)
npm run dev
# or
bun run dev
```

### Backend (Payment/Session Logging)

1. Go to `src/server/codeLoggerServer.js`.
2. Install backend dependencies:
   ```sh
   cd src/server
   npm install express googleapis cors
   ```
3. Start the backend server:
   ```sh
   node codeLoggerServer.js
   ```
4. (Optional) For Google Sheets logging, add your credentials and Sheet ID as described in the code comments.

---

## Project Structure

```
SUPPORT-HAC/
├── public/           # Static assets (favicon, placeholder.svg, robots.txt)
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Main pages (CoffeeSupport, JourneySupport, LiveSession, etc.)
│   ├── server/       # Express backend for logging
│   └── ...           # Styles, hooks, utils
├── README.md         # This file
├── package.json      # Project metadata and scripts
└── ...
```

---

## Customization & Deployment

- **Frontend:** Edit React components in `src/components` and `src/pages`.
- **Backend:** Update `src/server/codeLoggerServer.js` for custom logging or integrations.
- **Styling:** Use Tailwind CSS and custom animation classes in `src/index.css`.
- **Deployment:**
  - Deploy frontend with Vercel, Netlify, or your preferred static host.
  - Deploy backend (if used) on Render, Railway, or any Node.js host.

---

## Contributing

Pull requests and suggestions are welcome! Please open an issue or PR for any improvements, bug fixes, or new features.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

## Credits

- Built by the SUPPORT HAC community.
- UI inspired by shadcn/ui and Tailwind CSS.
- Special thanks to all contributors and supporters!
