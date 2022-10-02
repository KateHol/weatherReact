import React from "react";
import axios from "axios";

export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in New York is ${response.data.main.temp}°`)

    }
    let apiKey="d773f6cbefee55a5ba39025c971004bf";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return(
        <h2>Hello from Weather</h2>
    )
}