import React from "react";
import {values, withdraw} from "../../constants/Constant.js";

export const ValuesCard = () => {
    return (
        <>
            <div
                className="border-2 border-gray-200 shadow-lg rounded-xl p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                    {values.map((v) => (
                        <div key={v.id} className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h2 className="text-lg font-medium text-gray-700">{v.title}</h2>
                            <h2 className="text-xl font-semibold text-purple-700 mt-2">{v.val}</h2>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-4 w-full md:w-auto">
                    {withdraw.map((b) => (
                        <button
                            key={b.id}
                            className="flex items-center gap-2 border-2 border-purple-700 bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer">
                            <b.icon className="w-5 h-5"/>
                            <span>{b.text}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}