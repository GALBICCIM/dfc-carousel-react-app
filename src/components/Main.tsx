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
		}, 1700);

		document.body.style.cssText = `
      	position: fixed; 
      	top: -${window.scrollY}px;
      	overflow-y: scroll;
      	width: 100%;
		`;

		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = "";
			window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
		};
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
