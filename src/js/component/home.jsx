import React, { useState } from "react";
import Light from "./light";

//include images into your bundle


//create your first component
const Home = () => {
	const [lights, setLights] = useState("")
	return (
		<div>
			<div id="barra">
				<div className="text-center black" id="semaforo">
					<Light
						style={lights === "red" ? "on" : ""}
						color={`red`}
						setLights={setLights}
					/>
					<Light
						style={lights === "yellow" ? "on" : ""}
						color={`yellow`}
						setLights={setLights}
					/>
					<Light
						style={lights === "green" ? "on" : ""}
						color={`green`}
						setLights={setLights}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
