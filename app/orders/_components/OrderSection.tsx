"use client";

import { useAppSelector } from "@/lib/store/hooks";
import OrderTable from "./OrderTable";
import NoOrders from "./NoOrders";
import { Badge } from "@/components/ui/badge";

export default function OrderSection() {
	const orders = useAppSelector((state) => state.order.items);

	if (!orders || orders.length === 0) {
		return <NoOrders />;
	}

	return (
		<>
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Orders</h1>
				<Badge variant="secondary" className="text-sm">
					{orders.length} {orders.length === 1 ? "Order" : "Orders"}
				</Badge>
			</div>
			<OrderTable />
		</>
	);
}
