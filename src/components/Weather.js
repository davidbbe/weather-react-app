import React from 'react';

const Weather = (props) => {
  return (
    <div>
      { props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
      { props.temperature && <p>Temperature: {props.temperature}</p>}
      { props.hummidity && <p>Hummidity: {props.hummidity}</p>}
      { props.description && <p>Description: {props.description}</p>}
      { props.error && <p>{ props.error}</p>}
    </div>
  );
}

export default Weather;
