import React from "react";
import "../styles/Status.css";
import approvedIcon from "../images/status_approved.svg";
import declinedIcon from "../images/status_declined.svg";
import pendingIcon from "../images/status_pending.svg";


function Status(props) {
    let icon = props.status === "Approved" ? approvedIcon
        : props.status === "Pending" ? pendingIcon
            : declinedIcon;
    return (
        <div className="status">
            <div className="heading">
                <img src={icon} alt="" />
                <h3> {props.status} Budget Reassignment Status</h3>
            </div>
            <div className="value"> {props.value} </div>
        </div>
    );

}

export default Status;