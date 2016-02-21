import React, { PropTypes } from 'react';

export const Planet = (props) => (
  <li>{props.planet}</li>
);

Planet.propTypes = {
  planet: PropTypes.string
};