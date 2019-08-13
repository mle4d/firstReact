import React from 'react';

export default function Skeletor({ Name, Color, Trait, hex }) {
  const Skeletor = {
    Name,
    Color,
    Trait,
    hex
  };
  const fields = Object.keys(Skeletor)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd style={{ color: hex }}>{Skeletor[key]}</dd>
        </>
      );
    });
  return (
    <dl>
      {fields}
    </dl>
  );
}
