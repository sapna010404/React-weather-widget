import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";




export default function WeatherApp(){
    let [Weatherinfo,setWeatherInfo]=useState({city: "Delhi", feelisLike: 30.64, humidity: 78, temp:27.5, tempmax:27.5, tempMin:27.5, weather: "broken clouds"});

    let handleInfo=(newResult)=>{
        setWeatherInfo(newResult);
    }

    return (
        <>
        <h2 style={{textAlign:"center", color:"#001233"}}>Weather App by Sapna</h2>
        <SearchBox handleInfo={handleInfo}></SearchBox>
        <InfoBox info={Weatherinfo}></InfoBox>
        </>
    )
}
