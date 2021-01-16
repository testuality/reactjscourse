import React, { useState, useEffect} from "react";
import { fetchDailyData} from "./../../api/index";
import {Line, Bar} from "react-chartjs-2";
import  "./Chart.module.css";

const Chart = ({data, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        fetchDailyData().then((data) => {
            setDailyData(data.map((item)=> {
                    return {reportDate: item.reportDate,
                            totalConfirmed: item.totalConfirmed,
                            totalDeaths: item.deaths.total};
                }));
        });
    }, []);

    let chart = "Loading...";
    if (data.confirmed && country && country !== "global") {
        chart = <Bar
                height={600}
                width={800}
                data={{
                        labels: ["Infected", "Recovered", "Death"],
                        datasets: [{
                            label: "People",
                            backgroundColor: ["rgba(0,0,255,0.5)",  "rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
                            data: [data.confirmed, data.recovered, data.deaths]
                        }]
                    }}
                    options={{
                        legend: {display: false},
                        title: {display: true, text: `Current state in ${country}`}
                    }}
                    
                />
    }
    else if (dailyData.length > 0) {
        chart = (
        <Line
            height={600}
            width={800}
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
                            data: dailyData.map((item) => {return item.totalDeaths}),
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
        <div className="containerx">
            {chart}
        </div>
    );
}

export default Chart;