# Skip Hire App

This is a single-page React application that allows users to browse and select skip hire options based on size, price, and availability. The goal is to redesign and modernize an existing skip hire page with an improved UI/UX while keeping the core functionality intact. The application uses Redux for state management and includes unit tests for components and functionality.

## Thought Process & Approach

### 1. **Planning & Setup**
- Chose `create-react-app` for familiarity and simplicity in bootstrapping the project.
- Installed Redux Toolkit and React Redux for clean, maintainable state management.
- Installed Testing Library tools to ensure all components and features work as expected.

### 2. **Project Structure**
- Created a modular folder structure with clear separation between components, store logic, static data, and tests.
- Chose a single-page layout to meet project requirements but designed it to be easily extendable for future pages.

### 3. **State Management**
- Used Redux Toolkit to manage skip data and selected skip state.
- Skip data is stored in a local JSON file to simulate API responses.

### 4. **UI/UX Design**
- Used Bootstrap for consistent styling and layout structure.

- Focused on clean, responsive layout that works well on both mobile and desktop.
- Redesigned visual elements from the original screenshot to look modern, with better spacing, typography, and visual hierarchy.
- Created a component-based architecture using `SkipCard` and `SkipList`.

### 5. **Responsiveness & Accessibility**
- Used responsive grid layouts with CSS and inline styles.
- Ensured buttons and text are easily readable and clickable on mobile devices.

### 6. **Testing**
- Set up unit tests using React Testing Library.
- Ensured components render correctly, skip selection updates Redux state, and UI feedback reflects selection.

### 7. **Image Generation**
- Skips were visually recreated from the reference screenshot using AI image generation to maintain quality and consistency.

## Technologies Used
- React
- Redux Toolkit
- React Redux
- JSON for data
- React Testing Library

## Future Plans
- Connect to a real backend or headless CMS.
- Add animations and transition effects.
- Support user authentication for order history.
- Add a checkout and booking flow.

---

This README reflects the structure, decisions, and reasoning behind building the project in a maintainable, modern, and scalable way.
