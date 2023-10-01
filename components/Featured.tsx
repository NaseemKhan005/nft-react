import Title from "./common/Title";
import Card from "./common/Card";
import cardData from "../data/Featured/data.json";
import Shine from "./common/Shine";

const Featured = () => {
	return (
		<div className="flex flex-col gap-16 relative">
			<Title title="Featured NFTs" />
			<Shine customClasses="-right-44 top-full" />

			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gird-cols-5 gap-5">
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

export default Featured;