"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CommonButton = ({ text }: { text: string }) => {
	const [slideText, setSlideText] = useState(false);

	return (
		<Button
			size="lg"
			className="bg-white text-purple hover:bg-white w-44 py-[1.6rem] relative capitalize overflow-hidden"
			onMouseEnter={() => setSlideText(true)}
			onMouseLeave={() => setSlideText(false)}
		>
			<span
				className={cn(
					"absolute transition-all duration-500",
					slideText ? "bottom-full" : "bottom-[30%]"
				)}
			>
				{text}
			</span>
			<span
				className={cn(
					"absolute transition-all duration-500",
					slideText ? "bottom-[30%]" : "-bottom-full"
				)}
			>
				{text}
			</span>
		</Button>
	);
};

export default CommonButton;
