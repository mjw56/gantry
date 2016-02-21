import React from 'react';
import { Planet } from './Planet';
import { List } from 'immutable-props';

export const PlanetList = (props) => (
  <ul>{props.planets.map((planet, i) => 
    <Planet key={i} planet={planet} />)}
  </ul>
);

PlanetList.propTypes = {
  planets: List
};