import { Card, CardContent } from "@/components/ui/card";

export default function NoOrders() {
	return (
		<>
			<h1 className="text-3xl font-bold mb-8">Orders</h1>
			<Card>
				<CardContent className="flex flex-col items-center justify-center py-12">
					<p className="text-lg text-muted-foreground mb-4">No orders found</p>
					<p className="text-sm text-muted-foreground">
						Orders will appear here once customers place them.
					</p>
				</CardContent>
			</Card>
		</>
	);
}
