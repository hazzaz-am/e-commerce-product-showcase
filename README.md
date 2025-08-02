# E-Commerce Product Showcase

A simple e-commerce product showcase built with Next.js and Tailwind CSS, featuring a clean and responsive design. This project allows users to view products, add them to the cart, proceed to checkout and see order summaries.

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

## Live Demo

Check out the live demo [Click here](https://e-commerce-product-showcase-puce.vercel.app).

## Interface Preview

![Interface Preview](/public/preview.png)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Redux Toolkit](https://redux-toolkit.js.org/) - Client-side State management
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component library for building UI

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
