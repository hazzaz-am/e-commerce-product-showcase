"use client";

import { Button } from "@/components/ui/button";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
			<h2>Something went wrong!</h2>
			<Button onClick={() => reset()} variant="destructive" className="mt-5 cursor-pointer">Try again</Button>
		</div>
	);
}
