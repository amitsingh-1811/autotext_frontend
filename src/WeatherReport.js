import { useState } from 'react';
import './WeatherReport.css';
import ShowData from './ShowData';
function WeatherReport({cityName}){

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [checkConnection, setCheckConnection] = useState(navigator.onLine);
 
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;
    async function getReport(){
        try{ 
            setLoading(true)
            setCheckConnection(navigator.onLine)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`);
            const json = await response.json();
            setData(json);
        }

        catch(e){
            setData(null)
        }
        finally{
            setLoading(false)
        }
    }


    return(<div className='WeatherReport'>
        <button className="ReportButton" onClick={getReport}>
            Weather Report
        </button>
        {
            loading ? (<div className="spinner"></div> ) : (
                !checkConnection ? (<div>There is no internet connection</div>) : (data ? (
                    data.cod === 200 ? (
                        <ShowData data={data}/>
                    ) : (
                        <div>{data?.message}</div>
                    )
                ) : null)
            )
        }
        
    </div>)
}

export default WeatherReport;
