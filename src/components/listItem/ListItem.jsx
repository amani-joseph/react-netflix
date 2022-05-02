/** @format */

import {
	Add,
	PlayArrow,
	ThumbDownAltOutlined,
	ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listItem.scss";

const ListItem = ({ index }) => {
	const trailer =
		"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<img
				src="https://images.unsplash.com/photo-1589053739346-ed32227546a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
				alt=""
			/>
			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					<div className="itemInfo">
						<div className="icons">
							<PlayArrow className="icon"/>
							<Add />
							<ThumbUpAltOutlined className="icon"/>
							<ThumbDownAltOutlined className="icon"/>
						</div>
						<div className="itemInfoTop">
							<span>1 Hr 30 mins</span>
							<span className="limit">+16</span>
							<span>2019</span>
						</div>
						<div className="desc">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Odio, sunt cumque.
						</div>
						<div className="genre">Action</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
