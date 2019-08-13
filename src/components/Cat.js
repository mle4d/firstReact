import React from 'react';

export default function Cat({ name, age, weight }) {
  const cat = {
    name,
    age,
    weight
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
