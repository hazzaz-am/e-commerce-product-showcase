"use client";
import { useState } from "react";
import { Menu, X, Home, ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
	{ name: "Home", href: "/", icon: Home },
	{ name: "Checkout", href: "/checkout", icon: ShoppingCart },
	{ name: "Orders", href: "/orders", icon: Package },
];

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const currentPath = usePathname();

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="sticky top-0 z-50 border-b bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="text-xl font-bold text-primary">
							E-Commerce
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navigationItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={cn(
										"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2",
										currentPath === item.href
											? "bg-primary text-primary-foreground"
											: "text-foreground hover:bg-nav-hover hover:text-primary"
									)}
								>
									<item.icon size={16} />
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleMobileMenu}
							aria-label="Toggle mobile menu"
						>
							{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-nav-border">
							{navigationItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={cn(
										"px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-3",
										currentPath === item.href
											? "bg-primary text-primary-foreground"
											: "text-foreground hover:bg-nav-hover hover:text-primary"
									)}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<item.icon size={18} />
									{item.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
