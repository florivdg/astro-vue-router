# Vue Router + Astro Demo

A simple portfolio app demonstrating **client-side routing** with Vue.js inside an Astro project.

## 🎯 What This Demonstrates

- **Vue Router** integration within Astro pages
- **Client-side navigation** between Vue components
- **Nested routing** with meaningful routes
- **SSR-compatible** setup

## 🚀 Quick Start

```sh
bun install
bun dev
```

Visit `http://localhost:4321` and navigate to:

- `/portfolio/projects` - Browse web and mobile projects
- `/portfolio/about` - View bio and contact sections

## 📁 Key Files

- `src/pages/_clientRouter.ts` - Vue Router configuration
- `src/pages/portfolio/` - Demo routes with nested navigation
- `src/components/views/` - Vue components for each route

## 🧞 Commands

All commands are run from the root of the project:

| Command       | Action                               |
| :------------ | :----------------------------------- |
| `bun install` | Install dependencies                 |
| `bun dev`     | Start dev server at `localhost:4321` |
| `bun build`   | Build production site to `./dist/`   |
| `bun preview` | Preview build locally                |

## 💡 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Vue Router Documentation](https://router.vuejs.org)
