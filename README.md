# E-Commerce Product Showcase

A simple e-commerce product showcase built with Next.js and Tailwind CSS, featuring a clean and responsive design. This project allows users to view products, add them to the cart, proceed to checkout and see order summaries.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Redux Toolkit](https://redux-toolkit.js.org/) - Client-side State management
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component library for building UI

## Features

- 📝 View products
- ⚡ Quick access to product details
- 🛒 Add products to cart
- 🏁 Checkout process
- 📦 Order summary
- 💅 Responsive design

## Project Breakdown

- **Fetch Products:** Uses `Next.js`'s `generateStaticParams` to fetch product data from a mock API endpoint called `fakestore`, ensuring fast load times.

- **State Management:** `Redux Toolkit` is used for managing the cart and order state, allowing users to add to cart, and proceed to checkout. User can also see the order summary.

- **Keep Server Components:** The project utilizes Next.js's server components to fetch product data, ensuring that the initial page load is fast and SEO-friendly.

- **Component Reusability:** Logic is broken into small, testable components like `ProductItem`, `ProductDetails`, and `AddProductButton`.

## 📁 Project Structure and Logic

├── public/               # Static assets (images, etc.)
├── app/
│   ├── _components/       # Reusable UI components for home page
│   ├── product/            # Application pages (folder-based routing)
│   |── error.tsx         # Custom error page
│   |── not-found.tsx     # Custom 404 page
│   |── robots.ts        # Generate robots.txt for SEO
│   |── sitemap.ts       # Generate sitemap.xml for SEO
├── lib/                  # Utility functions and redux store setup
├── next.config.ts        # Next.js configuration
└── package.json

#### Logic Overview:

- Uses folder-based routing via the /folder with page.tsx directory.

- Each page can define its own SEO settings using metadata from next.

- Shared UI elements are in /components for reusability.

- API calls are handled in lib/.

- Styling is handled via Tailwind CSS and component library Shadcn/ui.


## 🔍 SEO Techniques Used

✅ **Dynamic Meta Tags** export dynamic metadata from Next.js.

✅ **Semantic HTML Tags** like `main` `section` `nav` for proper content structure.

✅ **Clean URLs** with Next.js routing (e.g., /orders, /product/[id]).

✅ **Image Optimization** using `Image` from next/image for lazy loading and better performance.

✅ **robots.txt** and **sitemap.xml** added in the /app directory.

✅ **Fast load times** with built-in Next.js performance features SSG.



## Live Demo

Check out the live demo [Click here](https://e-commerce-product-showcase-puce.vercel.app).

## Interface Preview

![Interface Preview](/public/preview.png)

## Getting Started

### Prerequisites

- node.js
- npm

### Installation

1. Clone the repository

```
git clone https://github.com/hazzaz-am/e-commerce-product-showcase
```

2. Install dependencies:

```
pnpm install
```

2. Run project locally:

```
pnpm dev
```

## 🙋‍♂️ About Me

I'm `Hazzaz Abdul Mannan`, a passionate frontend developer with a focus on building clean, interactive, and user-friendly interfaces. I enjoy learning new technologies and continuously improving my skills.
