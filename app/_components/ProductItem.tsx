import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ product }: { product: Product }) {
	return (
		<Card
			key={product.id}
			className="overflow-hidden hover:shadow-lg transition-shadow"
		>
			<CardHeader className="p-0">
				<div className="aspect-square overflow-hidden bg-muted">
					<Image
						src={product.image}
						alt={product.title}
						className="w-full h-full object-cover"
						width={300}
						height={300}
						loading="lazy"
					/>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<CardTitle className="text-base line-clamp-2 mb-2">
					{product.title}
				</CardTitle>
				<p className="text-lg font-semibold text-primary">${product.price}</p>
			</CardContent>
			<CardFooter className="p-4 pt-0">
				<Link href={`/product/${product.id}`} className="w-full cursor-pointer">
					<Button className="w-full cursor-pointer">View Details</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
