import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CartSlice {
	items: (Product & { quantity: number })[];
	totals: number;
	totalItems: number;
}

// Define the initial state using that type
const initialState: CartSlice = {
	items: [],
	totalItems: 0,
	totals: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (!existingItem) {
				const quantity = 1; // Default quantity for new items
				const newItem = { ...action.payload, quantity };
				state.items.push(newItem);
				return;
			}
			existingItem.quantity += 1;
		},
		calculateTotalAmount: (state) => {
			state.totals = state.items.reduce((total, item) => {
				return total + item.price * item.quantity;
			}, 0);
		},
		clearCart: (state) => {
			state.items = [];
			state.totalItems = 0;
			state.totals = 0;
		},
		countTotalCartItems: (state) => {
			state.totalItems = state.items.reduce((total, item) => {
				return total + item.quantity;
			}, 0);
		},
	},
});

export const { addToCart, clearCart, calculateTotalAmount, countTotalCartItems } = cartSlice.actions;

export default cartSlice.reducer;
