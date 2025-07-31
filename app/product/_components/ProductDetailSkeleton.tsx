import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailSkeleton() {
	return (
		<div className="min-h-screen bg-background py-8">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<Skeleton className="h-6 w-32 mb-8" />
				<div className="grid gap-8 md:grid-cols-2">
					<Skeleton className="aspect-square w-full" />
					<div className="space-y-4">
						<Skeleton className="h-8 w-3/4" />
						<Skeleton className="h-6 w-1/4" />
						<Skeleton className="h-4 w-1/2" />
						<Skeleton className="h-20 w-full" />
						<Skeleton className="h-10 w-full" />
					</div>
				</div>
			</div>
		</div>
	);
}
