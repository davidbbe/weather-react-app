import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div>
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        { this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        { this.props.hummidity && <p>Hummidity: {this.props.hummidity}</p>}
        { this.props.description && <p>Description: {this.props.description}</p>}
      </div>
    );
  }
}

export default Weather;
