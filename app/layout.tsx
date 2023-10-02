import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "../lib/utils";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NFT MarketPlace | Naseem Khan",
	description: "NFT MarketPlace is a Market Where NFT's will buy and sell",
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
					<Footer />
					<ScrollToTop />
				</main>
			</body>
		</html>
	);
}
