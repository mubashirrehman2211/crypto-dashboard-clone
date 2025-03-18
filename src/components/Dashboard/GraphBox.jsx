import React from "react";
import {ValuesSellingButton} from "./Values&SellingButton.jsx";
import {Graph} from "./Graph.jsx";
import {graphTimes} from "../../constants/Constant.js";

export const GraphBox = () => {
    return (
        <div className="border-2 border-gray-200 rounded-xl p-6 w-full shadow-lg bg-white">
            <ValuesSellingButton/>
            <Graph/>
            <div className="flex justify-between mt-4 text-gray-600 text-sm font-medium">
                {graphTimes.map((t) => (
                    <span key={t} className="px-2">{t}</span>
                ))}
            </div>
        </div>
    );
};