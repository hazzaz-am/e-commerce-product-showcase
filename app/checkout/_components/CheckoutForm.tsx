"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useForm } from "react-hook-form";
import { clearCart } from "@/lib/store/features/cart/cartSlice";
import { ICheckoutForm, IOrderItem } from "@/types";
import { addToOrderList } from "@/lib/store/features/order/orderSlice";

export default function CheckoutForm({
	onHandleSubmit,
}: {
	onHandleSubmit: () => void;
}) {
	const { items, totalItems, totals } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICheckoutForm>();

	const onSubmit = (data: ICheckoutForm) => {
		const newOrder: IOrderItem = {
			orderId: Date.now().toString(),
			customerName: data.fullName,
			totalItems: totalItems,
			totalAmount: totals,
			orderDate: new Date().toLocaleString(),
		};
		onHandleSubmit();
		dispatch(addToOrderList(newOrder));
		dispatch(clearCart());
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>Customer Information</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="fullName">Full Name</Label>
							<Input
								id="fullName"
								{...register("fullName", {
									required: "Full name is required",
								})}
								placeholder="John Doe"
							/>
							{errors.fullName && (
								<p className="text-destructive text-sm mt-1">
									{errors.fullName.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="phone">Phone Number</Label>
							<Input
								id="phone"
								{...register("phone", {
									required: "Phone number is required",
								})}
								placeholder="+880-123-456-7890"
							/>
							{errors.phone && (
								<p className="text-destructive text-sm mt-1">
									{errors.phone.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="address">Shipping Address</Label>
							<Textarea
								id="address"
								{...register("address", {
									required: "Shipping address is required",
								})}
								placeholder="123 Main St, City, State, ZIP"
								className="min-h-[100px]"
							/>
							{errors.address && (
								<p className="text-destructive text-sm mt-1">
									{errors.address.message}
								</p>
							)}
						</div>

						<Button
							type="submit"
							className="w-full mt-6 cursor-pointer"
							size="lg"
							disabled={items.length === 0}
						>
							Complete Purchase
						</Button>
					</CardContent>
				</Card>
			</div>
		</form>
	);
}
