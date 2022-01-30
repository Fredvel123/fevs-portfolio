import styled from "styled-components";
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const TitleStyles = styled.div`
  padding: 0 5%;
  padding-top: 15vh;
  h2 {
    font-size: 19px;
    font-family: ${fonts.letter2};
    margin-left: calc(7% + 0px) ; // calc() is to calculate the margin :)
    /* margin-right: 3%; */
    &::before{
      z-index: 100;
      content: '';
      background: ${colors.darkPink};
      position: absolute;
      display: block;
      left: 5%;
      margin-top: 1.6vh;
      height: 0.6vh;
      width: 75px;
    }
  }
  h3 {
    font-family: ${fonts.letter1};
    margin-top: 5vh;
    font-size: 45px;
  }
  // responsive design
  @media screen and (max-width: 1321px) {
    h2 {
      margin-left: calc(7% + 20px)  ;
    }
  }
  @media screen and (max-width: 1050px) {
    h2 {
      margin-left: calc(7% + 50px)  ;
    }
  }
  @media screen and (max-width: 580px) {
    h2 {
      margin-left: calc(7% + 70px)  ;
    }
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 37px;
    }
  }
`