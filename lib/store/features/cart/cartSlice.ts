import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CartSlice {
	items: string[];
}

// Define the initial state using that type
const initialState: CartSlice = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action) => {
			state.items.push(action.payload);
		},
	},
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
