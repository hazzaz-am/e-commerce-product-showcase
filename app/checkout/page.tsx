import { ShoppingCart } from "lucide-react";
import OrderForm from "./_components/OrderForm";

export default function CheckoutPage() {
	return (
		<div className="min-h-screen bg-background py-8">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
						<ShoppingCart className="text-primary" />
						Checkout
					</h1>
					<p className="text-muted-foreground mt-2">Complete your purchase</p>
				</div>
				<OrderForm />
			</div>
		</div>
	);
}
