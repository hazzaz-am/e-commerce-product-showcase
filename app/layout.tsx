import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "E-Commerce Product Showcase | Discover & Explore Top Products",
	description:
		"Explore a curated selection of top products across various categories. Find the best deals and elevate your shopping experience with our modern e-commerce showcase.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<StoreProvider>
					<Navbar />
					<main className="min-h-screen bg-background py-8">{children}</main>
				</StoreProvider>
			</body>
		</html>
	);
}
