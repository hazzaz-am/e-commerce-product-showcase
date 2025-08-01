"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/lib/store/hooks";
import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import { OrderDetailsModal } from "./OrderDetailsModal";

export default function OrderTable() {
	const orders = useAppSelector((state) => state.order.items);

	return (
		<Card>
			<CardContent className="p-0">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Order ID</TableHead>
							<TableHead>Customer Name</TableHead>
							<TableHead>Total Items</TableHead>
							<TableHead>Total Amount</TableHead>
							<TableHead>Order Date</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{orders.map((order) => (
							<TableRow key={order.orderId} className="hover:bg-muted/50">
								<TableCell className="font-medium">#{order.orderId}</TableCell>
								<TableCell>{order.customerName}</TableCell>
								<TableCell>
									<Badge variant="outline">{order.totalItems} items</Badge>
								</TableCell>
								<TableCell className="font-semibold text-green-600">
									${order.totalAmount}
								</TableCell>
								<TableCell>{formatDate(order.orderDate)}</TableCell>
								<TableCell className="text-right">
									<Dialog>
										<DialogTrigger asChild>
											<Button variant="outline" size="sm">
												<Eye className="w-4 h-4 mr-2" />
												View Details
											</Button>
										</DialogTrigger>
										<OrderDetailsModal order={order} />
									</Dialog>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
