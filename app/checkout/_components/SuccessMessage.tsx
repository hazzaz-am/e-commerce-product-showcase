import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessMessage() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<div className="text-center space-y-6 p-8">
				<CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
				<h1 className="text-4xl font-bold text-foreground">Thank You!</h1>
				<p className="text-xl text-muted-foreground">
					Your order has been successfully placed.
				</p>
				<p className="text-muted-foreground">
					You will receive a confirmation email shortly.
				</p>
				<Button className="mt-6">
					<Link href="/orders">See Your Orders</Link>
				</Button>
			</div>
		</div>
	);
}
