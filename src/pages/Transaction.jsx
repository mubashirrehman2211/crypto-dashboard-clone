import React from "react";

const transactions = [
    { id: 1, text: "INR Deposit", amount: "+₹5,000", status: "Success", date: "2025-03-13" },
    { id: 2, text: "Withdrawal", amount: "-₹2,000", status: "Pending", date: "2025-03-12" },
    { id: 3, text: "Bank Transfer", amount: "-₹1,500", status: "Failed", date: "2025-03-11" },
    { id: 4, text: "INR Deposit", amount: "+₹10,000", status: "Success", date: "2025-03-10" },
    { id: 5, text: "INR Deposit", amount: "+₹10,000", status: "Success", date: "2025-03-10" },
    { id: 6, text: "INR Deposit", amount: "₹10,000", status: "Pending", date: "2025-03-10" },
    { id: 7, text: "INR Deposit", amount: "+₹10,000", status: "Success", date: "2025-03-10" },
    { id: 8, text: "INR Deposit", amount: "+₹10,000", status: "Success", date: "2025-03-10" },
    { id: 9, text: "INR Deposit", amount: "₹10,000", status: "Failed", date: "2025-03-10" },
    { id: 10, text: "INR Deposit", amount: "+₹10,000", status: "Success", date: "2025-03-10" },
];

export const Transaction = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md border-gray-100 mt-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-200 text-gray-700 text-left">
                        <th className="p-3">#</th>
                        <th className="p-3">Transaction</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((t, index) => (
                        <tr key={t.id} className="border-b border-gray-100">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{t.text}</td>
                            <td className={`p-3 font-semibold ${t.amount.includes("+") ? "text-green-600" : "text-red-600"}`}>
                                {t.amount}
                            </td>
                            <td className="p-3">
                                    <span className={`px-3 py-1 rounded-full text-white text-sm ${t.status === "Success" ? "bg-green-500" : t.status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>
                                        {t.status}
                                    </span>
                            </td>
                            <td className="p-3">{t.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
