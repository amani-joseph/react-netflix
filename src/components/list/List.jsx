/** @format */
import { useState, useRef } from "react";

import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@material-ui/icons";
// import React, { useState } from "react";
import "./list.scss";
import ListItem from "../listItem/ListItem";

const List = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [isMoved, setisMoved] = useState(false);
	const listRef = useRef();
	const handleClick = (direction) => {
		setisMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === "right" && slideNumber < 3) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${
				-230 + distance
			}px)`;
		}
	};
	return (
		<div className="list">
			<span className="listTitle">Continue to watch</span>
			<div className="wrapper">
				<ArrowBackIosOutlined
					onClick={() => handleClick("left")}
					className="sliderArrow left"
					style={{ display: !isMoved && "none" }}
				/>
				<div className="container" ref={listRef}>
					<ListItem index={0} />
					<ListItem index={1} />
					<ListItem index={2} />
					<ListItem index={3} />
					<ListItem index={4} />
					<ListItem index={5} />
					<ListItem index={6} />
					<ListItem index={7} />
					<ListItem index={8} />
					<ListItem index={9} />
					<ListItem index={10} />
				</div>
				<ArrowForwardIosOutlined
					onClick={() => handleClick("right")}
					className="sliderArrow right"
				/>
			</div>
		</div>
	);
};

export default List;
