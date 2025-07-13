import Card from '@mui/material/Card';
import {v4 as uuidv4} from "uuid";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';



export default function InfoBox({info}){
    let CLOUDY_URL="https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let HOT_URL="https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnl9JQ2hIvV3K1WW52I_tghAvWXDNT7MDqow&s";

    let RAINY_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";

    let SNOW_URL="https://images.unsplash.com/photo-1631315124498-41ebb8b10ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3clMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return (
        <div className="InfoBox">
            <div className="cardInfo">
                 <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                       sx={{ height: 140 }}
                       image={info.humidity>80?RAINY_URL: info.humidity>70?CLOUDY_URL:info.temp>17?HOT_URL:info.temp<-10?SNOW_URL:COLD_URL}
                       title="green iguana"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                         {info.city} &nbsp;
                         {info.humidity>80?<ThunderstormIcon></ThunderstormIcon>: 
                         info.humidity>70?<WbCloudyIcon></WbCloudyIcon>:
                         info.temp>17?<SunnyIcon></SunnyIcon>:
                         info.temp<-10?<AcUnitIcon></AcUnitIcon>:<AcUnitIcon></AcUnitIcon>}
                       </Typography>
                       <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                           <p>Humidity: {info.humidity}  </p>
                           <p>Temperature: {info.temp}&deg;C </p>
                           <p>Minimum temperature: {info.tempMin}&deg;C </p>
                           <p>Maximum temperature: {info.tempMax}&deg;C </p>
                           <p>Theweather is described as <i>{info.weather}</i> and feels like: {info.feelisLike}&deg;C</p>

                       </Typography>
                     </CardContent>

               </Card>
               </div>
        </div>
    )
}