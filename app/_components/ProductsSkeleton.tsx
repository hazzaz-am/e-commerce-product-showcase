import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";

export default function ProductsSkeleton() {
	return (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{Array.from({ length: 8 }).map((_, index) => (
						<Card key={index} className="overflow-hidden">
							<CardHeader className="p-0">
								<Skeleton className="h-48 w-full" />
							</CardHeader>
							<CardContent className="p-4">
								<Skeleton className="h-4 w-3/4 mb-2" />
								<Skeleton className="h-4 w-1/2" />
							</CardContent>
							<CardFooter className="p-4 pt-0">
								<Skeleton className="h-10 w-full" />
							</CardFooter>
						</Card>
					))}
				</div>
	);
}
