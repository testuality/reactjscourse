import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country = null) => {
    try {

        let ext = "";
        if (country && country !== "global") {
            ext = "/countries/" + country;
        }
        const {data} = await axios.get(url + ext);
            return {
                confirmed: data.confirmed.value,
                recovered: data.recovered.value,
                deaths: data.deaths.value,
                lastUpdate: data.lastUpdate
            };
    }
    catch (exception) {

    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(url + "/daily");
        return data;
    }
    catch (exception) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const {data} = await axios.get(url + "/countries");

        console.log(data);
        return data.countries;
    }
    catch (exception) {
        
    }
}