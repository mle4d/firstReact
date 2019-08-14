import React from 'react';
import PropTypes from 'prop-types';

function Ghibli({ Character, Color, Movie, hex }) {
  return (
    <dl>
      <dt>Character</dt>
      <dd>{Character}</dd>
      <dt>Color</dt>
      <dd style={{ color: hex }}>{Color}</dd>
      <dt>Movie</dt>
      <dd>{Movie}</dd>
    </dl>
  );
}

Ghibli.propTypes = {
  Character: PropTypes.string.isRequired,
  Color: PropTypes.number.isRequired,
  Movie: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Ghibli;
