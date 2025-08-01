import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { formatDate } from "@/lib/utils";
import { IOrderItem } from "@/types";

export const OrderDetailsModal = ({ order }: { order: IOrderItem }) => {
	return (
		<DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
			<DialogHeader>
				<DialogTitle>Order Details - #{order.orderId}</DialogTitle>
			</DialogHeader>

			<div className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-sm font-medium">Customer</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-2xl font-bold">{order.customerName}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-sm font-medium">Order Date</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-lg">{formatDate(order.orderDate)}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-sm font-medium">
								Total Amount
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-2xl font-bold text-green-600">
								${order.totalAmount}
							</p>
						</CardContent>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Order Items ({order.totalItems})</CardTitle>
					</CardHeader>
				</Card>
			</div>
		</DialogContent>
	);
};
