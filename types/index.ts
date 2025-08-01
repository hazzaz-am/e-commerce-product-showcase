export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

export interface ICheckoutForm {
	fullName: string;
	phone: string;
	address: string;
}

export interface IOrderItem {
	orderId: string;
	customerName: string;
	totalItems: number;
	totalAmount: number;
	orderDate: string;
}
