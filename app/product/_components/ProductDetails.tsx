"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	countTotalCartItems,
	calculateTotalAmount,
	addToCart,
} from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { Product } from "@/types";
import { Star } from "lucide-react";

export default function ProductDetails({ product }: { product: Product }) {
	const dispatch = useAppDispatch();

	const handleProductAdd = (product: Product) => {
		dispatch(addToCart(product));
		dispatch(calculateTotalAmount());
		dispatch(countTotalCartItems());
	};
	return (
		<div className="grid gap-8 md:grid-cols-2">
			<Card className="overflow-hidden">
				<CardContent className="p-0">
					<div className="aspect-square bg-muted">
						<img
							src={product.image}
							alt={product.title}
							className="w-full h-full object-cover"
						/>
					</div>
				</CardContent>
			</Card>

			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold text-foreground mb-2">
						{product.title}
					</h1>
					<Badge variant="secondary" className="mb-4">
						{product.category}
					</Badge>
					<div className="flex items-center gap-2 mb-4">
						<div className="flex items-center">
							<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
							<span className="ml-1 text-sm text-muted-foreground">
								{product.rating.rate} ({product.rating.count} reviews)
							</span>
						</div>
					</div>
					<p className="text-3xl font-bold text-primary">${product.price}</p>
				</div>

				<div>
					<h2 className="text-lg font-semibold mb-2">Description</h2>
					<p className="text-muted-foreground leading-relaxed">
						{product.description}
					</p>
				</div>

				<div className="space-y-3">
					<Button
						className="w-full cursor-pointer"
						size="lg"
						onClick={() => handleProductAdd(product)}
					>
						Add to Cart
					</Button>
				</div>
			</div>
		</div>
	);
}
