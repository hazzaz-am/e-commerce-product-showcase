import { getProducts } from "@/lib/get-products";
import { Product } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const products = await getProducts();
	const productUrls = products.map((product: Product) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${product.id}`,
	}));
	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/orders`,
		},
		...productUrls,
	];
}
