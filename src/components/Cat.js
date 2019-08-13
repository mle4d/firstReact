import React from 'react';

export default function Cat() {
  const cat = {
    name: 'Darla',
    age: 5,
    weight: '8 lbs'
  };
  const fields = Object.keys(cat)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd>{cat[key]}</dd>
        </>
      );
    });
  return (
    <dl>
      {fields}
    </dl>
  );
}
