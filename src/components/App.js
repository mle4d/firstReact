import React from 'react';
import Sonder from './Sonder';
import Color from './Color';
import Cat from './Cat';
import MylittlePony from './MyLittlePony';
import Skeletor from './Skeletor';



export default function App() {
  return  (
    <>
    <h1>Mle's Favorite Things</h1>
      <h3>Child</h3>
      <Sonder Name="Sonder" Birthday="2-2-2016" Lifestyle="Vegan" />
      <h3>Colors</h3>
      <Color Name="Pretty Pink" RGB="246 153 224" Hex="#F699E0" />
      <Color Name="Pretty Purple" RGB="205 138 243" Hex="#CD8AF3" />
      <h3>Cats</h3>
      <Cat Name="Br'er" Age={5} Weight="28lbs" />
      <Cat Name="Darla" Age={5} Weight="8lbs" />
      <h3>My Little Ponies</h3>
      <MylittlePony Name="Rainbow Dash"  Color="Blue" CutieMark="Pastel Rainbow" hex="#77B6F6"/>
      <MylittlePony Name="Minty"  Color="Mint" CutieMark="Mint Candy" hex="#77F6EE"/>
      <h3>He-man Character</h3>
      <Skeletor Name="Skeletor" Color="Purple & Blue" Trait="Evil" hex="#9966FF"/>
      </>
  );
  
}

  
