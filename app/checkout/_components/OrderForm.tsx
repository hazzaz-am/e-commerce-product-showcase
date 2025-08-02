import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";

export default function OrderForm({
	onHandleSubmit,
}: {
	onHandleSubmit: () => void;
}) {
	return (
		<div className="grid gap-6 lg:grid-cols-2">
			<OrderSummary />
			<CheckoutForm onHandleSubmit={onHandleSubmit} />
		</div>
	);
}
