import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const {data} = await axios.get(url);

        console.log(data);
        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        };
    }
    catch (exception) {

    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(url + "/daily");

        console.log(data);
        return data;
    }
    catch (exception) {
        
    }
}