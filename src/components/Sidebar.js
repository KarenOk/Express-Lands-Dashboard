import React from "react";
import "../styles/Sidebar.css";
import logo from "../images/logo.png";
import dashboardIcon from "../images/dashboard-icon.svg";
import budgetIcon from "../images/budget-icon.svg";
import approvalIcon from "../images/approval-icon.svg";



function Sidebar() {
    return (
        <nav className="nav">
            <div className="logo-cont">
                <img src={logo} alt="Express Lands" className="logo" />
            </div>

            <ul>
                <li className="active">
                    <img src={dashboardIcon} alt="" className="nav-icon" />
                    Dashboard
                </li>
                <li>
                    <img src={budgetIcon} alt="" className="nav-icon" />
                    Budget
                </li>
                <li>
                    <img src={approvalIcon} alt="" className="nav-icon" />
                    Approval
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;