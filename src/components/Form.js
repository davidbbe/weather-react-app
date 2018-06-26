import React from 'react';

const Form = props => {
  return (
    <div>
      <h1 className="title-container__title">Weather Finder</h1>
      <h3 className="title-container__subtitle">Input any city and country to get weather information.</h3>
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City" required />
        <input type="text" name="country" placeholder="Country" required />
        <button>Get Weather</button>
      </form>
    </div>
  );
}

export default Form;
