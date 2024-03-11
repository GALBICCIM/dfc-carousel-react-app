import { useEffect, useState } from "react";
import Carousel from "../sliders/Carousel";
import IntroFirst from "./intro_1";
import IntroSeconds from "./intro_2";
import IntroThird from "./intro_3";

const Main = () => {
	const [isLoaing, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);
	return (
		<div>
			{isLoaing ? (
				<h1 style={{ color: "white" }}>Loading...</h1>
			) : (
				<Carousel>
					<IntroFirst></IntroFirst>
					<IntroSeconds></IntroSeconds>
					<IntroThird></IntroThird>
				</Carousel>
			)}
		</div>
	);
};

export default Main;
