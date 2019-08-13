import React from 'react';
import Color from './Color';
import Cat from './Cat';
//import Header from './Header';

export default function App() {
  return  (
    <>
      <Color name="Pretty Pink" rgb="246 153 224" hex="#F699E0" />
      <Cat name="Brer" age={5} weight="28lbs" />
      </>
  );
  
}

  
