import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from 'react';

export default function SearchBox({handleInfo}){

    //to handle error
    let [error,setError]=useState(false);

    let [city, setCity]=useState("");
    let result;
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="815db015ca33767f7d0f334859ad8245";

    let getWeatherInfo=async () =>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelisLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }

    }


    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let info=await getWeatherInfo();
            handleInfo(result);
            if(error){
                setError(false);
            }
        } catch(err){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Search City" variant="outlined" size="small" value={city} onChange={handleChange} required/> &nbsp;&nbsp;
                <Button variant="contained" type="submit">Send</Button>
            </form>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
        </div>
    )
}   