
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import ColdIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';






export default function InfoBox({info}){
 
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400";
  const COLD_URL = "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=400";
  const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400";
  const DEFAULT_URL = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400";


   const getImage = () => {
        if (info.humidity > 80) return RAIN_URL;
        if (info.temp > 35) return HOT_URL;
        if (info.temp < 10) return COLD_URL;
        return DEFAULT_URL;
    };

     const getIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon />;
        if (info.temp > 35) return <SunnyIcon />;
        if (info.temp < 10) return <ColdIcon />;
        return <SunnyIcon />;
     };


   return(
    <div className="InfoBox" >
       <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           sx={{ height: 140 }}
           image={getImage()}
           title={info.weather}
         />
         <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         {info.city}{getIcon()}
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temp={info.tempMin}</p>
            <p>Max Temp={info. tempMax}</p>
            <p>The weather can be described as {info.weather} and feels like {info.feelsLike}</p>
         </Typography>
          </CardContent>
     
          </Card>
      </div>
 </div>
      
   )
}