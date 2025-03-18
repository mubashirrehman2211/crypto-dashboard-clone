import React from "react";
import {sellingButton, times} from "../../constants/Constant.js";

export const ValuesSellingButton = () => {
    return (
        <>
            <div className="value-&-buttons flex justify-between">
                <div className="values">
                    <h2 className="font-semibold text-gray-500">Current Price</h2>
                    <h1 className="text-xl font-semibold text-gray-800">₹ 26,670.25 <span
                        className="text-sm text-green-500 ml-2">↗ 0.04%</span></h1>
                </div>
                <div className="btn flex gap-2">
                    {
                        sellingButton.map((b) => (
                            <button key={b.id}
                                    className="flex items-center gap-2 border-2 border-purple-700 bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer">
                                <b.icon/>
                                {b.text}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div
                className="times flex justify-around w-48 ml-auto border-2 rounded my-10 border-gray-300 bg-gray-300 text-gray-500 font-semibold">
                {times.map((g) => (
                    <span className="text-sm" key={g}>{g}</span>
                ))}
            </div>
        </>
    )
}