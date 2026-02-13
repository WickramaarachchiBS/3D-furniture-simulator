# HCI - Interactive 3D Design Application

A modern web-based 3D design application built with React, Three.js, and TypeScript. This application allows users to create, customize, and export 3D designs in an interactive environment.

## 🌟 Features

- **3D Design Interface** - Interactive 3D canvas powered by Three.js and React Three Fiber
- **User Authentication** - Secure login system with protected routes
- **Design Customization** - Real-time color picking and object manipulation
- **Export Functionality** - Save and export your 3D designs
- **State Management** - Efficient state handling with Zustand
- **Responsive Design** - Built with Tailwind CSS for a modern, responsive UI
- **TypeScript** - Full type safety throughout the application

## 🚀 Live Demo

Visit the live application: 

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7.6.0
- **State Management**: Zustand 4.5.2
- **Color Picker**: React Colorful
- **Icons**: Lucide React
- **Build Tool**: Vite 5.4.2

## 📦 Installation

1. Clone the repository:
```bash
git clone 
cd HCI
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Project Structure

```
HCI/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components (Landing, Login, Designer)
│   ├── store/          # State management (Zustand stores, Auth/State providers)
│   ├── data/           # Static data and configurations
│   ├── types.ts        # TypeScript type definitions
│   ├── App.tsx         # Main application component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Project dependencies and scripts
```

## 🔐 Authentication

The application includes a protected route system:
- **Landing Page** (`/`) - Publicly accessible home page
- **Login Page** (`/login`) - User authentication
- **Designer Page** (`/designer`) - Protected route requiring authentication

## 🎨 Key Dependencies

### Production
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `three` - 3D graphics library
- `react-colorful` - Color picker component
- `file-saver` - File export functionality
- `uuid` - Unique ID generation
- `zustand` - State management

### Development
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility-first CSS framework
- `typescript` - Type checking
- `eslint` - Code linting
- `gh-pages` - GitHub Pages deployment

## 🚀 Deployment

This project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

The `predeploy` script automatically builds the project before deployment.

## 📝 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules
- `postcss.config.js` - PostCSS configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is available for use under standard open source practices.

## 👨‍💻 Author


## 🙏 Acknowledgments

- React Three Fiber community
- Three.js documentation
- All open source contributors

---

**Note**: This is an HCI (Human-Computer Interaction) project demonstrating modern web-based 3D design interfaces.