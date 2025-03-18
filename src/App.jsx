import {Dashboard} from "./pages/Dashboard.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {Header} from "./components/Header.jsx";
import {Routes, Route} from "react-router-dom";
import React from "react";
import {Transaction} from "./pages/Transaction.jsx";

function App() {
    return (
        <div className="bg-gray-100 w-screen h-screen flex flex-col overflow-hidden">
            <Header/>
            <div className="flex flex-1 overflow-hidden">
                <Sidebar/>
                <div className="flex-1 overflow-auto p-4">
                    {/*<Dashboard/>*/}

                    <Routes>
                        <Route path="/" element={<Dashboard/>}></Route>
                        <Route path="/transaction" element={<Transaction/>}></Route>
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default App
