import axios from 'axios';

const axiosInstanceOpenAi = axios.create({
    baseURL : 'https://netflix-backend-topaz.vercel.app/'
})

axiosInstanceOpenAi.interceptors.request.use(
    (config) => {
        // if(config && config.headers){
        //     config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTNmZGNlMDNlMTk2NTM4YjFiOTdjMDY3ZDM0YTZhZCIsIm5iZiI6MTczNzYxNTM1Mi4zNzUsInN1YiI6IjY3OTFlN2Y4N2FmMjM1MjZkNzQ2ZmJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tu1TJoDawWpZTnXQ_V2X4-JZTDPNWqj8YbvB6LflKMA';
        // }
        return config;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
)

export default axiosInstanceOpenAi;