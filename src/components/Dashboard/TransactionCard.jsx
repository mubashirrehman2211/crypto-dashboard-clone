import React from "react";
import {transactions} from "../../constants/Constant.js";

export const TransactionCard = () => {
    return (
        <div className="border-2 rounded-xl border-gray-200 p-6 w-full shadow-lg bg-white">
            <h2 className="font-semibold text-gray-700 mb-4">Recent Transactions</h2>
            <div>
                {transactions.map((t) => (
                    <div className="flex items-center gap-4 p-4" key={t.id}>
                        <div
                            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-900">
                            <t.icon className="w-5 h-5"/>
                        </div>
                        <div className="flex justify-between w-full border-b border-gray-100 pb-2">
                            <div>
                                <h3 className="text-md font-medium text-gray-800">{t.text}</h3>
                                <p className="text-sm text-gray-500">{t.date}</p>
                            </div>
                            <h3 className="text-md font-semibold text-purple-700">{t.money}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="border-2 items-center text-center justify-center flex w-10/12 m-auto rounded-xl p-1 bg-gray-200 border-gray-200 cursor-pointer mt-2">View
                All
            </button>
        </div>
    );
};
