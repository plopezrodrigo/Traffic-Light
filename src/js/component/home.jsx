import React, { useState } from "react";
import Light from "./light";

//include images into your bundle


//create your first component
const Home = () => {
	const [lights, setLights] = useState({
		red: `off`,
		yellow: `off`,
		green: `off`
	})
	return (
		<div>
			<div id="barra">
				<div className="text-center black" id="semaforo">
					<Light
						style={lights.red === "off" ? "red" : "red-on"}
						color={`red`}
						setLights={setLights}
						lights={lights}
					/>
					<Light
						style={lights.yellow === "off" ? "yellow" : "yellow-on"}
						color={`yellow`}
						setLights={setLights}
						lights={lights}
					/>
					<Light
						style={lights.green === "off" ? "green" : "green-on"}
						color={`green`}
						setLights={setLights}
						lights={lights}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
