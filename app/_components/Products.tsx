import { Product } from "@/types";

import ProductItem from "./ProductItem";
import { getProducts } from "@/lib/get-products";

export default async function Products() {
	const products = await getProducts();

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((product: Product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
}
