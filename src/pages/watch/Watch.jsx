/** @format */

import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
	return (
		<div className="watch">
			<div className="back">
				<ArrowBackOutlined />
				Home
			</div>
			<video
				className="video"
				autoPlay
				progress
				controls
				src="https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-beach-sky-4157-large.mp4"
			/>
		</div>
	);
};

export default Watch;
