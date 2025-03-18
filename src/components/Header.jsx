import React from "react";
import {CiLogin} from "react-icons/ci";

export const Header = () => {
    return (
        <div className="flex justify-around shadow-sm w-full p-3">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button
                className="w-8 h-8 border-2 border-gray-200 rounded-full flex text-center justify-center items-center bg-gray-200 text-xl">
                <CiLogin/></button>
        </div>
    )
}