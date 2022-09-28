import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID HYTFo5uMG6OXKXxxs_Cz_fGFAhEH8P5jo2YMtlv6De0"
    }
});