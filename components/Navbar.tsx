"use client";
import { useState } from "react";
import { Menu, X, Home, ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import { useAppSelector } from "@/lib/store/hooks";

const navigationItems = [
	{ name: "Home", href: "/", icon: Home },
	{ name: "Checkout", href: "/checkout", icon: ShoppingCart },
	{ name: "Orders", href: "/orders", icon: Package },
];

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const currentPath = usePathname();
	const items = useAppSelector((state) => state.cart.items);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="sticky top-0 z-50 bg-background border-b border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="text-xl font-bold text-primary">
							E-commerce
						</Link>
					</div>

					<div className="flex items-center justify-between">
						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-4">
							<div className="flex items-baseline space-x-4">
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

						<div className="flex items-center gap-4">
							<Link
								href="/checkout"
								className="relative p-2 hover:bg-nav-hover rounded-md transition-colors duration-200"
							>
								<ShoppingCart size={20} className="text-foreground" />
								{items.length > 0 && (
									<Badge
										variant="destructive"
										className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
									>
										{items.length}
									</Badge>
								)}
							</Link>
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
