import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
import "./Navbar.css";

function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showsidebar = () => setSidebar(!sidebar);
	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars onClick={showsidebar} />
				</Link>
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul onClick={showsidebar} className="nav-menu-items">
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AIIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
