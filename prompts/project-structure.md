# Project Specification

## Stack
- **Language**: Vanilla JavaScript
- **Markup**: HTML5
- **Styling**: CSS3

## Goals
- **Objective**: Create a pixel-perfect clone of [dev-atomics.com](https://dev-atomics.com).
- **Scope**:
  - Home Page
  - About Page

## Project Structure

The project follows a modular structure suitable for a vanilla JS application.

```text
/
├── index.html              # Entry point (redirects or serves Home)
├── README.md               # Project documentation
├── prompts/                # AI prompts and context
│   └── project-structure.md
└── src/
    ├── components/         # Reusable UI components (e.g., Navbar, Footer)
    │   └── [Component]/
    │       ├── index.html
    │       ├── styles.css
    │       └── script.js
    ├── pages/              # Page-specific logic and structure
    │   ├── home/
    │   │   ├── page.html
    │   │   └── script.js
    │   └── about/
    │       ├── page.html
    │       └── script.js
    └── styles/             # Global styles
        └── main.css
```
