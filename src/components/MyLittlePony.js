import React from 'react';
import PropTypes from 'prop-types';

function MyLittlePony({ Name, Color, CutieMark, hex }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{Name}</dd>
      <dt>Color</dt>
      <dd style={{ color: hex }}>{Color}</dd>
      <dt>Cutie Mark</dt>
      <dd>{CutieMark}</dd>
    </dl>
  );
}

MyLittlePony.propTypes = {
  Name: PropTypes.string.isRequired,
  Color: PropTypes.number.isRequired,
  CutieMark: PropTypes.string.isRequired
};

export default MyLittlePony;
