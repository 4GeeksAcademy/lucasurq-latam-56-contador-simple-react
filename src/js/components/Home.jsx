import React from "react";
import SecondsCounter from "./SecondsCounter.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let count = 0;
//create your first component
const Home = () => {

	return (
		<SecondsCounter />
	);
};

export default Home;