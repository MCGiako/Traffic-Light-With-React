import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState({
		light1: false,
		light2: false,
		light3: false
	});
	return (
		<div className="container">
			<h1>Semáforo</h1>
			<br />
			<div id="div1">
				<div
					className={light.light1 ? "light1On" : "light1"}
					onClick={() =>
						setLight({ light1: true, luz2: false, luz3: false })
					}></div>
				<div
					className={light.light2 ? "light2On" : "light2"}
					onClick={() =>
						setLight({ light1: false, light2: true, light3: false })
					}></div>
				<div
					className={light.light3 ? "light3On" : "light3"}
					onClick={() =>
						setLight({ light1: false, light2: false, light3: true })
					}></div>
			</div>
		</div>
	);
};

export default Home;
