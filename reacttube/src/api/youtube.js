import axios from "axios";

// Youtube API: https://developers.google.com/youtube/v3
// API key AIzaSyCSOC0SOKrihw5-VZXKeT0JFBSm4L9XOTs

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3"
    }
);