import React from 'react';

export default function Sonder({ Name, Birthday, Lifestyle }) {
  const Sonder = {
    Name,
    Birthday,
    Lifestyle
  };
  const fields = Object.keys(Sonder)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd>{Sonder[key]}</dd>
        </>
      );
    });
  return (
    <dl>
      {fields}
    </dl>
  );
}
