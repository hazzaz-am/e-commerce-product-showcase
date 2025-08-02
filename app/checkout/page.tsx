
import { Metadata } from "next";
import CheckoutSection from "./_components/CheckoutSection";

export const metadata: Metadata = {
	title: "Checkout | Complete Your Purchase",
	description:
		"Complete your purchase and enjoy a seamless shopping experience with our easy-to-use checkout process.",
};

export default function CheckoutPage() {
	return (
		<div className="min-h-screen bg-background py-8">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<CheckoutSection />
			</div>
		</div>
	);
}
