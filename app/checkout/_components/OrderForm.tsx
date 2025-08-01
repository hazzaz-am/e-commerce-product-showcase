"use client";

import SuccessMessage from "./SuccessMessage";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

export default function OrderForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

	if (isSubmitted) {
		return <SuccessMessage />;
	}
	return (
		<div className="grid gap-6 lg:grid-cols-2">
			<OrderSummary />
			<CheckoutForm onHandleSubmit={handleSubmit} />
		</div>
	);
}
