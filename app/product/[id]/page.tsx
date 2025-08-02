import { Button } from "@/components/ui/button";
import { getProducts, getSingleProduct } from "@/lib/get-products";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductDetails from "../_components/ProductDetails";
import { Product } from "@/types";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const product = await getSingleProduct(id);

	return {
		title: product.title,
		description: product.description,
	};
}

export async function generateStaticParams() {
	const products = await getProducts();

	return products.map((product: Product) => ({
		id: `${product.id}`,
	}));
}

export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const product = await getSingleProduct(id);

	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Button variant="ghost" asChild className="mb-8">
				<Link href="/">
					<ArrowLeft className="w-4 h-4 mr-2" />
					Back to Products
				</Link>
			</Button>
			<ProductDetails product={product} />
		</section>
	);
}
