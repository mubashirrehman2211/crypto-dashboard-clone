import React, {useState} from "react";
import {navLinks} from "../constants/Constant.js";
import {Link} from "react-router-dom";

export const Sidebar = () => {
    const [activeLink, setActiveLink] = useState("Dashboard");

    return (
        <div className="relative w-[250px] h-full shadow-lg bg-white flex flex-col p-4">
            <h3 className="my-6 text-center text-2xl font-bold text-purple-600">@Mubashir</h3>
            <div className="space-y-3">
                {navLinks.map((nav) => (
                    <Link
                        key={nav.id}
                        to={nav.link}
                        onClick={() => setActiveLink(nav.text)}
                        className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-all duration-300 border-2 
                        ${activeLink === nav.text ? "bg-purple-100 border-purple-300 text-purple-800" : "bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100"}`}
                    >
                        <nav.icon className="w-5 h-5"/>
                        <p>{nav.text}</p>
                    </Link>
                ))}
            </div>
            <button className="absolute bottom-2">Support</button>
        </div>
    );
};
