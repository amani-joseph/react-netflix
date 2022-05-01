/** @format */
import "./Home.scss";
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div className="home">
			
			<Navbar />
               <img 
               width="100%"
               src="https://burst.shopifycdn.com/photos/asphalt-highway.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="" />
			
		</div>
	);
};

export default Home;
