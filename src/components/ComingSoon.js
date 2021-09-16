import React from 'react';
import banner from '../svgFiles/ComingSoonBanner.svg';
import nameDate from '../svgFiles/JandMwithDate.svg';
import styled from 'styled-components';

const NameDate = styled.img`
  width: 69%;
  padding: 6% 0% 3% 2%;
  @media screen and (orientation: portrait) {
  width: 85%;
  padding: 4% 0% 6% 0%;
}
`

const Banner = styled.img`
  width: 35%;
  padding: 0% 3% 0% 0%; 
  @media screen and (orientation: portrait) {
  width: 69%;
  height: auto;
  padding: 0% 0% 4% 0%;

}
`
const ComingDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100vw;
  @media screen and (orientation: portrait) {
      flex-direction: column;
      height: 100vh;
      width: 100vw;
  }
`


function ComingSoon() {
  return (
    <ComingDiv className="ComingSoon">
      <NameDate src={nameDate} alt="Julia And Marlies, June 25, 2022" />
      <Banner src={banner} alt="Celebration information coming soon!" />
    </ComingDiv>
  );
}

export default ComingSoon
