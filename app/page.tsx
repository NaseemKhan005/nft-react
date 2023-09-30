import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#141040] before:bg-[url('/bg.png')] before:w-full before:h-full before:bg-cover before:bg-top-left before:opacity-20 before:absolute before:top-0 before:left-0 overflow-x-hidden">
			<Navbar />
			<div className="container px-5 mx-auto">
				<Header />
			</div>
		</div>
	);
}
