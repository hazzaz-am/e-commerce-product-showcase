import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/lib/store/hooks";

export default function OrderSummary() {
	const { items, totals } = useAppSelector((state) => state.cart);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Order Summary</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{items.length === 0 ? (
					<p className="text-muted-foreground text-center py-4">
						Your cart is empty
					</p>
				) : (
					<>
						{items.map((item) => (
							<div key={item.id} className="flex justify-between items-center">
								<div className="flex items-center gap-3">
									<img
										src={item.image}
										alt={item.title}
										className="w-12 h-12 object-cover rounded"
									/>
									<div>
										<p className="font-medium text-sm">
											{item.title.slice(0, 30)}...
										</p>
										<p className="text-sm text-muted-foreground">
											Qty: {item.quantity}
										</p>
									</div>
								</div>
								<span className="font-medium">
									${(item.price * item.quantity).toFixed(2)}
								</span>
							</div>
						))}
						<div className="space-y-2">
							<hr className="border-border" />
							<div className="flex justify-between font-bold text-lg">
								<span>Total</span>
								<span>${totals.toFixed(2)}</span>
							</div>
						</div>
					</>
				)}
			</CardContent>
		</Card>
	);
}
