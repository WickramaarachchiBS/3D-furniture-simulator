<!-- Replace the src below with your actual logo path once available -->
<!-- <p align="center">
  <img src="docs/assets/logo.png" alt="Concept.Store Logo" width="100" style="border-radius: 20px;" />
</p> -->

<h1 align="center">🛋️ Concept.Store — 3D Room Designer</h1>

<p align="center">
  <strong>An interactive 3D/2D furniture room planner built with React, Three.js, and TypeScript.</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#️-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-authentication">Authentication</a> •
  <a href="#-contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Three.js-0.182-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <a href="https://3-d-furniture-simulator.vercel.app/"><img src="https://img.shields.io/badge/Live%20Demo-Vercel-black?style=flat-square&logo=vercel" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
  <img src="https://img.shields.io/github/last-commit/WickramaarachchiBS/3D-furniture-simulator?style=flat-square" alt="Last Commit" />
</p>

---

## 📸 Screenshots

<p align="center">
  <img src="docs/assets/concept.store.gif" alt="Home Page" width="100%" />
</p>

<details>
<summary><strong>🖼️ View More Screenshots</strong></summary>

<br />

| Page                     | Screenshot                                                 |
| ------------------------ | ---------------------------------------------------------- |
| **Home**        | ![Home](docs/assets/screenshots/home-screen.png)              |
| **Login**        | ![Movies](docs/assets/screenshots/login-screen.png)              |
| **Store Locator**        | ![Movie Details](docs/assets/screenshots/store-locator-screen.png) |
| **Contact Us**       | ![Seat Selection](docs/assets/screenshots/contactus-screen.png)       |
| **About Us**              | ![Payment](docs/assets/screenshots/aboutus-screen.png)            |
| **3D Designer** | ![Confirmation](docs/assets/screenshots/3D-designer-screen.png)  |
| **3D Designer**         | ![Profile](docs/assets/screenshots/2D-designer-screen.png)            |


</details>

---

## 🌐 Overview

**Concept.Store** is a browser-based interactive room designer. Users can place, move, rotate, and colour 10 different 3D furniture models in both an immersive 3D view and a precise 2D floor-plan view. Designs can be saved, loaded, and exported as screenshots.

---

## ✨ Features

| Feature                     | Description                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------- |
| 🧊 **3D Room Editor**       | Interactive 3D canvas with orbit controls, shadows, and dynamic lighting            |
| 🗺️ **2D Floor-Plan Editor** | Top-down view with drag, drop, and rotate support                                   |
| 🛋️ **10 Furniture Models**  | Sofa, chair, bed, wardrobe, bookshelf, dining table, coffee table, plant, rug, lamp |
| 🎨 **Colour Picker**        | Real-time per-furniture colour customisation                                        |
| 🏠 **Room Customisation**   | Adjust wall colour, floor colour, wall opacity, and room dimensions                 |
| 💾 **Save & Load Layouts**  | Persist room designs to local storage                                               |
| 📸 **Screenshot Export**    | Capture and download your design from both 2D and 3D views                          |
| 🔐 **Authentication**       | Protected designer route with login system                                          |
| 📱 **Responsive UI**        | Fully responsive layout with Tailwind CSS                                           |

---

## 🛠️ Tech Stack

<table>
<tr>
<th align="center">Frontend</th>
<th align="center">3D Graphics</th>
<th align="center">Tooling</th>
</tr>
<tr>
<td align="center">
<img src="https://skillicons.dev/icons?i=react" width="40" height="40" alt="React" /><br />React 19
</td>
<td align="center">
<img src="https://skillicons.dev/icons?i=threejs" width="40" height="40" alt="Three.js" /><br />Three.js 0.182
</td>
<td align="center">
<img src="https://skillicons.dev/icons?i=vite" width="40" height="40" alt="Vite" /><br />Vite 6.x
</td>
</tr>
<tr>
<td align="center">
<img src="https://skillicons.dev/icons?i=typescript" width="40" height="40" alt="TypeScript" /><br />TypeScript 5.x
</td>
<td align="center">
<img src="https://skillicons.dev/icons?i=react" width="40" height="40" alt="React Three Fiber" /><br />React Three Fiber 9.x
</td>
<td align="center">
<img src="https://skillicons.dev/icons?i=tailwind" width="40" height="40" alt="Tailwind CSS" /><br />Tailwind CSS 4.x
</td>
</tr>
<tr>
<td align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" width="40" height="40" alt="React Router" /><br />React Router 7.x
</td>
<td align="center">
<img src="https://skillicons.dev/icons?i=threejs" width="40" height="40" alt="React Three Drei" /><br />React Three Drei 10.x
</td>
<td align="center">
<img src="https://skillicons.dev/icons?i=js" width="40" height="40" alt="Zustand" /><br />Zustand 5.x
</td>
</tr>
</table>

### Utilities

| Package          | Purpose                   |
| ---------------- | ------------------------- |
| `react-colorful` | Lightweight colour picker |
| `file-saver`     | Screenshot download       |
| `lucide-react`   | Icon set                  |
| `uuid`           | Unique ID generation      |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/WickramaarachchiBS/3D-furniture-simulator.git
cd 3D-furniture-simulator

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Scripts

```bash
npm run dev        # Start Vite development server
npm run build      # Type-check + production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## 📡 API Endpoints

### Base URL

```
Development Local: http://localhost:5173/
Deployed Production URL: https://3-d-furniture-simulator.vercel.app/
```

### Quick Reference

| Route            | Access       | Description   |
| ---------------- | ------------ | ------------- |
| `/`              | Public       | Landing page  |
| `/login`         | Public       | Login form    |
| `/designer`      | 🔒 Protected | Room designer |
| `/about`         | Public       | About page    |
| `/contact`       | Public       | Contact page  |
| `/store-locator` | Public       | Store locator |

---

## 📁 Project Structure

```
3D-furniture-simulator/
├── public/
│   └── thumbnails/              # Furniture thumbnail images
├── src/
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── room/
│   │   │   ├── Furniture3D.tsx        # 3D furniture models (React Three Fiber)
│   │   │   ├── Room3D.tsx             # 3D room shell (walls, floor)
│   │   │   ├── RoomEditor2D.tsx       # 2D canvas floor-plan editor
│   │   │   ├── RoomEditor3D.tsx       # 3D editor with drag & collision
│   │   │   └── FurnitureControls.tsx
│   │   ├── sidebar/
│   │   │   ├── FurnitureList.tsx      # Furniture picker panel
│   │   │   ├── RoomControls.tsx       # Room dimension & colour controls
│   │   │   └── SavedLayouts.tsx       # Save/load panel
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── RoomEditor.tsx             # Editor shell (2D/3D toggle)
│   │   ├── Sidebar.tsx
│   │   └── ViewToggle.tsx             # 2D/3D switch + screenshot
│   ├── data/
│   │   └── defaultFurniture.ts        # Furniture template definitions
│   ├── pages/
│   │   ├── Designer.tsx               # Protected designer page
│   │   ├── Landing.tsx
│   │   ├── Login.tsx
│   │   ├── AboutUs.tsx
│   │   ├── ContactUs.tsx
│   │   └── StoreLocator.tsx
│   ├── store/
│   │   ├── AuthProvider.tsx           # Authentication context
│   │   └── StateProvider.tsx          # Global app state (Zustand)
│   ├── types.ts                       # Shared TypeScript types
│   ├── App.tsx                        # Root component & routing
│   └── main.tsx                       # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🌍 Deployment

This project is live on **Vercel** — [https://3-d-furniture-simulator.vercel.app/](https://3-d-furniture-simulator.vercel.app/)

### Manual Production Build

```bash
npm run build
# Output is in the dist/ folder — upload to any static hosting provider
```

---

## 🤝 Contributors

<table>
<tr height="200">
<td align="center" width="120">
<a href="https://github.com/WickramaarachchiBS">
<img src="https://github.com/WickramaarachchiBS.png" width="80px" alt="Wickramaarachchi B S" style="border-radius: 50%"/>
<br />
<sub><b>Wickramaarachchi B S</b></sub>
</a>
<br />
<sub>Project Lead<br>Full Stack Developer</sub>
</td>

<td align="center" width="120">
<a href="https://github.com/Himashasandeepani">
<img src="https://github.com/Himashasandeepani.png" width="80px" alt="Himasha Sandeepani" style="border-radius: 50%"/>
<br />
<sub><b>Himasha Sandeepani</b></sub>
</a>
<br />
<sub>UI / UX Designer<br>Full Stack Developer</sub>
</td>

<td align="center" width="120">
<a href="https://github.com/Kasuuun7">
<img src="https://github.com/Kasuuun7.png" width="80px" alt="Kasun Madhusanka" style="border-radius: 50%"/>
<br />
<sub><b>Kasun Madhusanka</b></sub>
</a>
<br />
<sub>Full Stack Developer</sub>
</td>
<td align="center" width="120">
<a href="https://github.com/Kavix31299">
<img src="https://ui-avatars.com/api/?name=Kavindu+Madhuranga&background=random" width="80px" alt="Kavindu Madhuranga" style="border-radius: 50%"/>
<br />
<sub><b>Kavindu Madhuranga</b></sub>
</a>
<br />
<sub>Full Stack Developer</sub>
</td>
<td align="center" width="120">
<a href="https://github.com/ashiru202">
<img src="https://github.com/ashiru202.png" width="80px" alt="Ashiru" style="border-radius: 50%"/>
<br />
<sub><b>Ashiru</b></sub>
</a>
<br />
<sub>Full Stack Developer (3D Engine)</sub>
</td>
<td align="center" width="120">
<a href="https://github.com/JayaweeraHRK">
<img src="https://ui-avatars.com/api/?name=Rashmila+Jayaweera&background=random" width="80px" alt="Rashmila Jayaweera" style="border-radius: 50%"/>
<br />
<sub><b>Rashmila Jayaweera</b></sub>
</a>
<br />
<sub>UI / UX Designer<br>Full Stack Developer</sub>
</td>
</tr>
</table>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — bringing Three.js into the React ecosystem
- [React Three Drei](https://github.com/pmndrs/drei) - helpers and abstractions for R3F
- [Three.js](https://threejs.org/) - 3D graphics engine
- [Zustand](https://github.com/pmndrs/zustand) - state management
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - development server and build tool
- [react-colorful](https://github.com/omgovich/react-colorful) - colour picker component

---

<p align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</p>

<p align="center">
  <a href="https://github.com/WickramaarachchiBS/3D-furniture-simulator/issues">Report Bug</a>
  •
  <a href="https://github.com/WickramaarachchiBS/3D-furniture-simulator/issues">Request Feature</a>
  •
  <a href="https://3-d-furniture-simulator.vercel.app/">Live Demo</a>
</p>

<p align="center">
  Built with ❤️ using React, Three.js &amp; TypeScript
</p>
