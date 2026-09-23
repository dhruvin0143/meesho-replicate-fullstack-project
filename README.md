# Meesho Marketplace Replica

An academic/learning full-stack e-commerce project designed to replicate the UI/UX and core shopping functionality of the popular Meesho marketplace. 

## 🚀 Features Implemented (Frontend)

*   **Pixel-Perfect UI**: Uses custom CSS to exactly match the signature purple branding, layout, fonts, and shadows of the original site.
*   **Dynamic Routing**: Built with `react-router-dom` to support seamless navigation between the Homepage, Cart, and individual Product Details pages.
*   **Global State Management**: Utilizes React Context API (`CartContext`) to manage cart operations (add, remove, update quantity, calculate totals/discounts) without prop-drilling.
*   **Advanced UI Interactions**:
    *   Hover-triggered Mega Menu for category navigation.
    *   Interactive Product side-scrolling galleries and banners.
    *   Side-sliding Modal for editing cart item details (size, quantity).
*   **Responsive Design**: Flexbox and CSS Grid ensure the marketplace looks great across different screen sizes.

## 🛠️ Tech Stack (Current Phase)

*   **Framework**: React (Vite)
*   **Styling**: Pure Vanilla CSS (custom variables, modern layouts)
*   **Icons**: `react-icons`
*   **Routing**: `react-router-dom`

## 📦 How to Run Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`.

## 🔜 Next Steps
*   Migrate hardcoded mock data to a PostgreSQL database.
*   Build a Node.js/Express backend API for dynamic product fetching and user authentication.
