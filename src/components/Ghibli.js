import React from 'react';
import PropTypes from 'prop-types';

function Ghibli({ Name, Color, Movie, hex }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{Name}</dd>
      <dt>Color</dt>
      <dd style={{ color: hex }}>{Color}</dd>
      <dt>Movie</dt>
      <dd>{Movie}</dd>
    </dl>
  );
}

Ghibli.propTypes = {
  Name: PropTypes.string.isRequired,
  Color: PropTypes.number.isRequired,
  Movie: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Ghibli;
