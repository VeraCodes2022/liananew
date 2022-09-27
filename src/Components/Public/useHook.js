import {useState,useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "https://www.lianatech.com/resources/blog.rss";
const CROSS_DOMAIN = 'https://cors-anywhere.herokuapp.com';
// const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;


function useFetch(url) {
    const [data,setData]=useState("");
    const [items,setItems]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const [date,setDate]=useState("");
    const [descprt,setDscrpt]=useState("");
    const BASEURL=`${CROSS_DOMAIN}/${BASE_URL}`;

useEffect(
        ()=>{
            setLoading(true)
            axios.get(url)
            .then(
                res=>{
                    setData(res.data[0])
                    setCountryId(res.data[0].Country.ID)
                    // setLocationkey(res.data[0].Key)
                    return axios.get(BASE_URL)   
                }
            )
            .then (
                    res=>{
                        setForecast(res.data.DailyForecasts[0])  
                        setDate(forecast.Date)
                        setDay(forecast.Day.IconPhrase)
                        setNight(forecast.Night.IconPhrase)
                        setTemp_max(forecast.Temperature.Maximum.Value)
                        setTemp_min(forecast.Temperature.Minimum.Value)
                        setUnit(forecast.Temperature.Maximum.Unit)
                    } 
            )
            .catch(
                (error)=>{setError(error)}
            ).finally(
                setLoading(false)
            )
        },[]
    )
 return {loading,error,data, forecast,date,countryId,day,night,temp_max,temp_min,unit}
}

export default useFetch