import { BsFire } from "react-icons/bs";
import Image from "next/image";

import Users from "./common/Users";
import AboutCard from "./common/AboutCard";
import Shine from "./common/Shine";

const About = () => {
	return (
		<div className="flex flex-col gap-32 relative">
			<div className="flex items-top gap-32">
				<div className="flex flex-col gap-8 w-[80%]">
					<p className="rounded-full py-3 px-8 bg-[#121636] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100/10 w-fit flex items-center gap-2 text-sm">
						<BsFire className="bg-gradients-to-r from-[#6625AE] to-[#7360FE] bg-clip-text text-transparent" />
						Digital Art
					</p>
					<h2 className="text-4xl font-bold">Digital art works.</h2>
					<p className="text-white/50">
						We are a collective group of designers, developers, and
						technologists with extensive backgrounds in digital sector. Our
						purpose is to make most notable NFT collections.
					</p>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-2xl font-bold">$173 M</p>
							<span className="text-sm">Trading Volume</span>
						</div>
						<div>
							<p className="text-2xl font-bold">538 K+</p>
							<span className="text-sm">NFTs Created</span>
						</div>
						<div>
							<p className="text-2xl font-bold">23 K+</p>
							<span className="text-sm">Total Users</span>
						</div>
					</div>
				</div>
				<div className="w-full relative flex items-end">
					<Image
						src="/header/4.jpg"
						alt="nft"
						width={500}
						height={500}
						className="w-[280px] h-96 object-cover object-top rounded-2xl -rotate-12"
					/>
					<Image
						src="/header/12.jpg"
						alt="nft"
						width={500}
						height={500}
						className="w-[300px] h-80 object-cover object-top rounded-2xl rotate-12"
					/>
					<div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-gray-100/5 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100/10 p-8">
						<Users />
						<p className="text-sm text-white/70 leading-relaxed mt-3">
							Digital art creators joined us to sale their own NFT to our
							marketplace.
						</p>
					</div>
				</div>
			</div>

			<Shine customClasses="-left-44" />
			<AboutCard />
		</div>
	);
};

export default About;
