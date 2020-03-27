import React from 'react';
import '../styles/Statistics.css';
import { Bar } from "react-chartjs-2";


function Statistics(props) {
    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        datasets: [
            {
                label: "Spent",
                backgroundColor: "#e95957",
                borderColor: "#e95957",
                borderWidth: 1,
                data: [45, 79, 50, 41, 16, 85, 20, 16, 85, 20, 67, 45]
            },
            {
                label: "Balance",
                backgroundColor: "#17c7bf",
                borderColor: "#17c7bf",
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 12]
            }
        ]
    };

    const options = {
        responsive: true,
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                usePointStyle: true,
                fontSize: 12
            }
        },
        type: "bar",
        barThickness: 3
    };

    return (
        <div className="statistics">
            <h3> TOTAL {props.name.toUpperCase()} Budget Statistics </h3>
            <p> Total Budget Spent vs Total Budget Balance </p>
            <p>
                Total Spent <strong className="spent amount"> N 8,282,289</strong>
                Total Balance <strong className="balance amount">  N 8,282,289</strong>
            </p>

            <Bar
                data={data}
                width={null}
                height={null}
                options={options}
            />
        </div>
    );
}

export default Statistics;
