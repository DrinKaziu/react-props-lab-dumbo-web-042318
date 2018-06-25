import React from 'react';


class Spaceship extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  colors: ['black', 'red'],
  hasRockets: false
};

export default Spaceship;
