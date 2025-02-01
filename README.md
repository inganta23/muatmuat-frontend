# Frontend Test App - MyItems

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The project is built using **Next.js** with the **App Router** structure, styled with **Tailwind CSS** and state management using **Zustand**. The focus is on creating a responsive UI for showing items.

## Features

- **Item List**: Users can browse a list of available items and filter(sort and search) them based on specific criteria. User can also delete the item from the list
- **Pokemon List**: Users can browse a list of available pokemon.
- **Item Detail**: Users can view and edit detailed information about a selected item by clicking the item from the list page.
- **Responsive UI**: The application is designed to be fully responsive.

## Technical Requirements

- Built with **Next.js** (App Router).
- Styled using **Tailwind CSS**.
- State management using **Zustand**.
- No backend implementation required (dummy data is used).
- Minimal dependencies for a lightweight build.

---

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A package manager like `npm`, `yarn`, `pnpm`, or `bun`.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/inganta23/fertility-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fertility-app
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

The project follows the **App Router** structure of Next.js. Here’s an overview of the key files and folders:

- `app/`: Contains the main application pages and components.
  - `page.js`: The landing page with the item list and filters.
  - `[id]/page.js`: Dynamic route for displaying item details.
- `components/`: Reusable UI components (e.g., course cards, filters).
- `hooks/`: State management using **Zustand** Dummy data is used for inital load.
- `helper/`: Helper function.

---

## Core Features Implementation

### 1. Item List

- Displays a list of items fetched from dummy data.
- Includes filters to narrow down the course list (search and sort).
- Able to delete each item on the list page.
- Built with responsive design to ensure usability on all screen sizes.

### 2. Pokemon List

- Displays a list of pokemon fetched from public API.
- Built with responsive design to ensure usability on all screen sizes.

### 3. Item Detail

- User open this page by clicking desired item from the list items page.
- Dynamic route (`/course/[id]`) to display detailed information about a selected items.
- Able to edit the selected item.

### 4. Responsive UI

- Tailwind CSS is used to create a fully responsive layout.
- Mobile-first approach ensures optimal performance on smaller devices.

---
