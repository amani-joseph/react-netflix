/** @format */

import {
	ArrowDropDown,
	Notifications,
	NotificationsActiveOutlined,
	Search,
} from "@material-ui/icons";
import React from "react";
import "./Navbar.scss";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<Search />
					<span>KID</span>
					<Notifications />
					<img
						src="https://images.pexels.com/photos/4668528/pexels-photo-4668528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt=""
					/>
					<ArrowDropDown />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
