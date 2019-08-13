import React from 'react';

export default function Color({ name, rgb, hex }) {
  const color = {
    name,
    rgb,
    hex
  };
  const fields = Object.keys(color)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd style={{ color: '#F699E0' }}>{color[key]}</dd>
        </>
      );
    });
  return (
    <dl>
      {fields}
    </dl>
  );
}
