import React from "react";
import "../styles/Dashboard.css";
import Status from "../components/Status";
import Budget from "../components/Budget";
import Statistics from "../components/Statistics";

function Dashboard(props) {
    return (
        <main className={`dashboard ${props.showSidebar ? "show-sidebar" : ""}`} onClick={props.removeSidebar}>
            <div className="heading">
                <h2>Dashboard</h2>
                <span className="date"> {(new Date()).toDateString()}</span>
            </div>

            <div className="cont-1">
                <section>
                    <Budget name="opex" />
                    <Budget name="capex" />
                </section>

                <section>
                    <Status status="Approved" value="373" />
                    <Status status="Pending" value="200" />
                    <Status status="Declined" value="372" />
                </section>
            </div>

            <section>
                <Statistics name="opex" />
                <Statistics name="capex" />
            </section>


        </main>
    );
}

export default Dashboard;