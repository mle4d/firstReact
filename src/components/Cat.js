import React from 'react';
import PropTypes from 'prop-types';

function Cat({ Name, Age, Weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{Name}</dd>
      <dt>Age</dt>
      <dd>{Age}</dd>
      <dt>Weight</dt>
      <dd>{Weight}</dd>
    </dl>
  );
}

Cat.propTypes = {
  Name: PropTypes.string.isRequired,
  Age: PropTypes.number.isRequired,
  Weight: PropTypes.string.isRequired
};

export default Cat;
