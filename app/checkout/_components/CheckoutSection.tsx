"use client";

import { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import { ShoppingCart } from "lucide-react";
import OrderForm from "./OrderForm";

export default function CheckoutSection() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return <SuccessMessage />;
	}
	return (
		<>
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
					<ShoppingCart className="text-primary" />
					Checkout
				</h1>
				<p className="text-muted-foreground mt-2">Complete your purchase</p>
			</div>
			<OrderForm onHandleSubmit={handleSubmit} />
		</>
	);
}
