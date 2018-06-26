import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '58ed1117bdbb2b702916632f9fd22117';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: undefined,
    tnActive: ''
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`);
    const data = await api_call.json();
    const apiCallbackCode = data.cod;
    if (city && country && (apiCallbackCode !== '404')) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: '',
        tnActive: 'tnActive'
      });
    } else if (apiCallbackCode === '404') {
      const apiErrorMessage = data.message;
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        error: apiErrorMessage
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        error: 'Error submitting data, try again another time'
      });
    }
  }

  backButton = () => {
    this.setState({
      temperature: undefined,
      city: '',
      country: '',
      humidity: undefined,
      wind: undefined,
      description: undefined,
      error: '',
      tnActive: ''
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row of-hidden">
            <div className={`col-12 title-container ${this.state.tnActive}`}>
              <Form getWeather={this.getWeather} />
            </div>
            <div className={`col-12 form-container ${this.state.tnActive}`}>
              <button type="button" class="btn" onClick={this.backButton}>Back</button>
              <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                wind={this.state.wind}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
