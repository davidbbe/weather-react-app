import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather__info">
      {  
        props.city && props.country && <h2>Current weather in { props.city }, { props.country }</h2>
      }
      {  
        props.description && <p className="weather__key"> Conditions: 
          <span className="weather__value capitalize"> { props.description }</span>
        </p> 
      }
      {  
        props.temperature && <p className="weather__key"> Temperature: 
          <span className="weather__value"> { Math.round(props.temperature) }&#8457;</span>
        </p> 
      }
      {  
        props.humidity && <p className="weather__key"> Humidity: 
          <span className="weather__value"> { props.humidity }%</span>
        </p> 
      }
      {  
        props.humidity && <p className="weather__key"> Wind Speed: 
          <span className="weather__value"> { Math.round(props.wind) }mph</span>
        </p> 
      }
      { 
        props.error && <p className="weather__error">{ props.error }</p>  
      }
    </div>
  );
}

export default Weather;
