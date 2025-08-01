"use client";

import { Button } from "@/components/ui/button";
import {
	addToCart,
	calculateTotalAmount,
	countTotalCartItems,
} from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { Product } from "@/types";

export default function AddProductButton({ product }: { product: Product }) {
	const dispatch = useAppDispatch();

	const handleProductAdd = (productItem: Product) => {
		dispatch(addToCart(productItem));
		dispatch(calculateTotalAmount());
		dispatch(countTotalCartItems());
	};

	return (
		<Button
			className="w-full cursor-pointer"
			size="lg"
			onClick={() => handleProductAdd(product)}
		>
			Add to Cart
		</Button>
	);
}
