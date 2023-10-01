import Header from "../components/Header";
import Featured from "../components/Featured";
import Explore from "../components/Explore";
import About from "../components/About";
import Collections from "../components/Collections";

export default function Home() {
	return (
		<div>
			<div className="bg-gradients-to-b from-[#130F3A] via-[#130F3A] to-purple overflow-x-hidden">
				{/* background image */}
				<div className="h-screen w-full bg-[url('/bg.png')] bg-cover bg-top-left absolute top-0 left-0 opacity-20 -z-[10]" />
				<div className="container px-5 mx-auto flex flex-col gap-32">
					<Header />
				</div>
			</div>

			<div className="container px-5 mx-auto flex flex-col gap-20">
				<Featured />
				<Explore />
				<About />
				<Collections />
			</div>
		</div>
	);
}
