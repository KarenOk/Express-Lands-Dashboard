import React from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "../styles/Budget.css";
import 'react-circular-progressbar/dist/styles.css';
import pieIcon from "../images/pie2.svg";
import moneyIcon1 from "../images/money-icon_1.svg";
import moneyIcon2 from "../images/money-icon_2.svg";
import moneyIcon3 from "../images/money-icon_3.svg";
import moneyIcon4 from "../images/money-icon_4.svg";


function Budget(props) {
    const colors = ["#6915cf", "#fb0091", "#e95957"];
    const percentages = [24, 78, 56];
    const percentage = percentages[Math.floor(Math.random() * 3)]
    return (
        <div className="budget">
            <div className="heading">
                <div className="left">
                    <img src={pieIcon} alt="" />
                    <h3>Total Annual {props.name.toUpperCase()} Budget</h3>
                    <span className="amount"> N 50,000,000</span>
                </div>

                <div className="right"> Annual &#8964; </div>
            </div>


            <div className="content-cont">
                <div className="progress-cont">
                    <CircularProgressbarWithChildren
                        value={percentage}
                        styles={{
                            path: { stroke: `${colors[Math.floor(Math.random() * 3)]}` },
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <span style={{ fontSize: 18, fontWeight: 600 }}>{percentage}%</span>
                            <span style={{ fontSize: 13, display: "block" }}> REMAINING</span>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>

                <div className="values-cont">
                    <div className="value">
                        <img src={moneyIcon2} alt="" className="" />
                        <div className="details">
                            <p> Total <strong> {props.name.toUpperCase()} </strong> Spent</p>
                            <p> N 18,000,000 </p>
                        </div>
                    </div>

                    <div className="value">
                        <img src={moneyIcon4} alt="" className="" />
                        <div className="details">
                            <p> Total <strong> {props.name.toUpperCase()} </strong> Spent</p>
                            <p> N 18,000,000 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default Budget;