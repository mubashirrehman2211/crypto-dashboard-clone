import React from "react";
import {ValuesCard} from "../components/Dashboard/ValuesCard.jsx";
import {GraphBox} from "../components/Dashboard/GraphBox.jsx";
import {TransactionCard} from "../components/Dashboard/TransactionCard.jsx";
import {InfoBox} from "../components/Dashboard/InfoBox.jsx";

export const Dashboard = () => {
    return (
        <div className="w-full max-w-[1060px] h-full mx-auto p-6 sm:p-8">
            <ValuesCard/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-5">
                <GraphBox/>
                <TransactionCard/>
                <InfoBox/>
                <InfoBox/>
            </div>
        </div>
    );
};