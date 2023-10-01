import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import Navbar from "../components/Navbar";
import { cn } from "../lib/utils";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={cn(
					mulish.className,
					"bg-purple text-white relative overflow-x-hidden"
				)}
			>
				<main className="relative overflow-x-hidden">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
