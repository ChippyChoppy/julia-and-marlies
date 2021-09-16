import './App.css';
import React from 'react';
import Test from './Test';
import banner from './svgFiles/ComingSoonBanner.svg';
import nameDate from './svgFiles/JandMwithDate.svg';
import styled from 'styled-components';

const NameDate = styled.img`
  width: 69%;
  padding: 6% 0% 3% 2%;
  @media screen and (orientation: portrait) {
  width: 85%;
  padding: 4% 0% 6% 0%;
}
`

const ComingSoon = styled.img`
  width: 35%;
  padding: 0% 3% 0% 0%; 
  @media screen and (orientation: portrait) {
  width: 69%;
  height: auto;
  padding: 0% 0% 4% 0%;

}
`

function App() {
  return (
    <div className="App">
      <NameDate src={nameDate} alt="Julia And Marlies, June 25, 2022" />
      <ComingSoon src={banner} alt="Celebration information coming soon!" />
      <div>
        <Test />
      </div>
    </div>
  );
}

export default App;
