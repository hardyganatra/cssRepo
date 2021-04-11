import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <AIIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Reports",
		path: "/reports",
		icon: <IOIcons.IoIosPaper />,
		cName: "nav-text",
	},
	{
		title: "Products",
		path: "/products",
		icon: <IOIcons.IoMdPeople />,
		cName: "nav-text",
	},
	{
		title: "Messages",
		path: "/messages",
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: "nav-text",
	},
	{
		title: "Support",
		path: "/support",
		icon: <IOIcons.IoMdHelpCircle />,
		cName: "nav-text",
	},
];
