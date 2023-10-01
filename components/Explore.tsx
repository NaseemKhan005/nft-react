import Title from "./common/Title";
import Card from "./common/Card";
import cardData from "../data/Explore/data.json";
import Shine from "./common/Shine";

const Explore = () => {
	return (
		<div className="flex flex-col gap-16">
			<div>
				<Title title="Explore NFTs" />
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gird-cols-5 gap-x-5 gap-y-10">
				{cardData.map((data) => (
					<Card
						key={data.id}
						nftImg={data.nftImg}
						userImg={data.userImg}
						name={data.name}
						title={data.title}
						date={data.date}
					/>
				))}
			</div>
		</div>
	);
};

export default Explore;
