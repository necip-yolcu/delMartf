/*
 * WPReact
 * Developed by: diaryforlife
 * */
import axios from 'axios';


//export const WPDomain = 'https://wp.nouhtml5.com';
export const WPDomain = 'https://clone.trendmall.nl';



export const oathInfo = {
    consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY,
    consumer_secret: process.env.NEXT_PUBLIC_CONSUMER_SECRET,
};

const basicAuthHeader = 'Basic ' + btoa(process.env.NEXT_PUBLIC_CONSUMER_KEY + ':' + process.env.NEXT_PUBLIC_CONSUMER_SECRET);
console.log("basicAuthHeaderbasicAuthHeader",basicAuthHeader)


export const customHeaders = {
    //Authorization: 'Basic Y2tfN2M4YzVjZmJlYWRkNmQ3NzgwZjg4MzU1ZmQzOTNmMmVlMTQ3YTg0Mzpjc19kMGNkNzE0OTFmYTI0YmY4NTllOTZkMjNiOTYzZTJjMWI1YWI5ODY2',
    //ContentType: 'application/json',
    Accept: '*/*',
};

export const WPRepository = axios.create({
    headers: customHeaders,
});

