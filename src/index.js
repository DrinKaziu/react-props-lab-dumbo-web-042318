import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';


const MillenniumFalconColors = ['white', 'black', 'blue', 'orange']

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed="0.5"
    hasRockets="true"
    colors={MillenniumFalconColors}
  />,
  document.getElementById('global')
);
