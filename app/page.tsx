import { Suspense } from "react";
import Products from "./_components/Products";
import ProductsSkeleton from "./_components/ProductsSkeleton";

export default async function Home() {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 className="text-3xl font-bold text-foreground mb-8">Products</h1>
			<Suspense fallback={<ProductsSkeleton />}>
				<Products />
			</Suspense>
		</section>
	);
}
