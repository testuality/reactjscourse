import React, { useState, useEffect} from "react";
import { fetchDailyData} from "./../../api/index";
import {Line, Bar} from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        console.log("useeff chart");
        fetchDailyData().then((data) => {
            console.log("useeffect chart data ", data);
            setDailyData(data);
        });
    }, []);

    let lineChart = "Loading...";
    if (dailyData[0]) {
        lineChart = (
        <Line
            data= {
                {labels: dailyData.map((item) => {return item.reportDate }), 
                datasets: 
                    [
                        {
                            data: dailyData.map((item) => {return item.totalConfirmed}),
                            label: "Infected",
                            borderColor: "#3333FF",
                            fill: true
                        },
                        {
                            data: dailyData.map((item) => {return item.deaths.total}),
                            label: "Deaths",
                            borderColor: "red",
                            backgroundColor: "rgba(255,0,0,0.5)",
                            fill: true
                        }
                    ]
                }
            }
            />
        );
    }

    return (
        <div className="container">
            {lineChart}
        </div>
    );
}

export default Chart;