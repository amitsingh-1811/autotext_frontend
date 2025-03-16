import './ShowData.css';

function ShowData({data}){
    const {
        coord: { lon, lat } = {},
        weather: [{ main: weatherMain, description, icon }] = [{}],
        main: { temp, feels_like, humidity } = {},
        wind: { speed } = {},
        sys: { country } = {},
        name: cityName,
      } = data;
    
      return (
        <div>
          <h2>Weather in {cityName}, {country}</h2>
          <p>Temperature: {temp}°K (Feels like {feels_like}°K)</p>
          <p>Weather: {weatherMain} - {description}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {speed} m/s</p>
          <p>Location: {lat}, {lon}</p>
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" />
        </div>
      );
}

export default ShowData;