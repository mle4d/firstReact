import React from 'react';

export default function Color() {
  const color = {
    name: 'Pretty Pink',
    rgb: '246 153 224',
    hex: '#F699E0'
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
