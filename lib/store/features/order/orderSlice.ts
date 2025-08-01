import { IOrderItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface OrderSlice {
	items: IOrderItem[];
}

// Define the initial state using that type
const initialState: OrderSlice = {
	items: [],
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		addToOrderList: (state, action: PayloadAction<IOrderItem>) => {
			state.items.push(action.payload);
		},
	},
});

export const { addToOrderList } = orderSlice.actions;

export default orderSlice.reducer;
