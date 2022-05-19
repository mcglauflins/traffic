import React, { useState } from "react";
import PropTypes from "prop-types";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");

	return (
		<>
			<div className="trafficlight">
				<div
					className={
						color == "red"
							? "circle red highlight"
							: "circle red black"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color == "yellow"
							? "circle yellow highlight"
							: "circle yellow black"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color == "green"
							? "circle green highlight"
							: "circle green black"
					}
					onClick={() => setColor("green")}></div>
			</div>

			<div className="stick" onClick={() => setColor("")}></div>
		</>
	);
};
