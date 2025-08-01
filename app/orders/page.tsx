import { Metadata } from "next";
import OrderSection from "./_components/OrderSection";

export const metadata: Metadata = {
	title: "Orders | View Your Purchase History",
	description:
		"Review your past orders and track the status of your purchases with our user-friendly order management system.",
};

export default function OrdersPage() {
	return (
		<section className="container mx-auto px-4 py-8">
			<OrderSection />
		</section>
	);
}
