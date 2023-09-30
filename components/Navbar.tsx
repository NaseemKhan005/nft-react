"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<div className="backdrop-blur-xl bg-purple/10">
			<div className="flex items-center justify-between container px-5 mx-auto py-4 md:py-6 before:absolute before:top-0 before:left-0 before:w-80 before:h-72 before:bg-gradient-to-br before:from-[#2A0A45] before:via-transparent before:to-transparent before:-z-10">
				<div>
					<h2 className="text-xl lg:text-2xl font-semibold">NFT MarketPlace</h2>
				</div>
				<div className="">
					<ul
						className={cn(
							"flex items-start md:items-center gap-3 md:gap-8 lg:gap-10 capitalize text-sm fixed top-0 w-full sm:w-80 h-screen md:w-auto md:h-auto md:relative md:right-0 backdrop-blur-2xl bg-purple md:backdrop-none md:bg-transparent flex-col md:flex-row py-32 px-10 md:p-0 transition-all z-[100]",
							showNavbar ? "right-0" : "-right-full"
						)}
					>
						{[
							"home",
							"about",
							"live bidding",
							"explore",
							"collections",
							"contact",
						].map((name) => (
							<li key={name} className="w-full">
								<Link
									href={`#${name}`}
									className="border-b block border-white w-full py-3 md:py-0 md:w-auto md:border-0 relative before:absolute before:bottom-0 md:before:-bottom-1 before:rounded-full before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 whitespace-nowrap"
								>
									{name}
								</Link>
							</li>
						))}
						<Button
							onClick={() => setShowNavbar(false)}
							size="icon"
							variant="ghost"
							className="md:hidden absolute top-12 left-8 cursor-pointer text-2xl hover:bg-muted-foreground/20 rounded-full hover:text-white hover:rotate-180 transition-all"
						>
							<IoClose />
						</Button>
					</ul>
					<Button
						onClick={() => setShowNavbar(true)}
						size="icon"
						variant="ghost"
						className="md:hidden cursor-pointer text-2xl hover:bg-muted-foreground/20 rounded-full hover:text-white"
					>
						<BiMenu />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
