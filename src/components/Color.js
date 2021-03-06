import React from 'react';

export default function Color({ Name, RGB, Hex }) {
  const color = {
    Name,
    RGB,
    Hex
  };
  const fields = Object.keys(color)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd style={{ color: Hex }}>{color[key]}</dd>
        </>
      );
    });
  return (
    <dl>
      {fields}
    </dl>
  );
}
