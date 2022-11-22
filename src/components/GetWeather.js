import React, { useState } from 'react'

export default function GetWeather() {

    const [latitude, setLatitude] = useState("");
    const [longitud, setLongitud] = useState("");
    const [data, setData] = useState("");
    const onSubmit = async (e) =>
    {
        e.preventDefault();
        const resultQuery = await GetWeather(latitude,longitud);
        console.log(resultQuery)
        setData(resultQuery.current_weather);
    };

if (data == null)
{
  return (
    <div>
        <form onSubmit = {onSubmit}>
            <label>Latitude</label>
            <input type ={"text"} name={latitude} onChange ={(e) =>{setLatitude(e.target.value);}}></input>
            <label>Latitude</label>
            <input type ={"text"} name={latitude} onChange ={(e) =>{setLongitud(e.target.value);}}></input>
            <input type = {"submit"} value ="Enviar"></input>
        </form>
        <p>No existen datos</p>
    </div>
  )
} 
else
  {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label>Latitude</label>
          <input type={"text"} name={latitude} onChange={(e) => { setLatitude(e.target.value); }}></input>
          <label>Longitude</label>
          <input type={"text"} name={longitud} onChange={(e) => { setLongitud(e.target.value); }}></input>
          <input type={"submit"} value="Enviar"></input>
        </form>
        <div className='card'>
          <div className='card-body bg-secondary'>
            <p>Temperatura: {data.temperature}</p>
            <p>Hora: {data.time}</p>
            <p>Temperatura del Viento: {data.temperature}</p>
            <p>Direccion del viento: {data.temperature}</p>
          </div>
        </div>
      </div>
    );
  }
}
