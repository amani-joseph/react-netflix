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
	const listRef = useRef();
	const handleClick = (direction) => {
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && slideNumber > 0) {
               setSlideNumber(slideNumber - 1)
			listRef.current.style.transform = `translate(${460 + distance}px)`;
		}
		if (direction === "right" && slideNumber < 2) {
               setSlideNumber(slideNumber + 1)
			listRef.current.style.transform = `translate(${-460 + distance}px)`;
		}
	};
	return (
		<div className="list">
			<span className="listTitle">Continue to watch</span>
			<div className="wrapper">
				<ArrowBackIosOutlined
					onClick={() => handleClick("left")}
					className="sliderArrow left"
				/>
				<div className="container" ref={listRef}>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
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
