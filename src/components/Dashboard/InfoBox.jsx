import React from "react";

export const InfoBox = () => {
    return (
        <div className="border-2 border-gray-200 rounded-xl bg-white shadow-md p-4">
            <div
                className="title w-20 flex text-center items-center justify-center h-8 border-2 rounded-2xl bg-purple-500 text-white">Loans
            </div>
            <p className="text-lg font-semibold mx-3">
                Learn more about Loans – Keep your Bitcoin, access it’s value without selling it
            </p>
        </div>
    )
}