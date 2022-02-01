import styled from "styled-components";
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const TitleStyles = styled.div`
  padding: 0 5%;
  padding-top: 15vh;
  background: ${colors.secondBlue};
  h2 {
    font-size: 19px;
    font-family: ${fonts.letter2};
    margin-left: calc(7% + 0px) ; // calc() is to calculate the margin :)
    opacity: 0;
    transition: ease-in-out 1s;
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
    &.visible {
      opacity: 1;
    }
  }
  h4 {
    margin-top: 7vh;
    font-weight: 50;
    line-height: 5vh;
    font-family: ${fonts.letter2};
    margin-bottom: 2vh;
    opacity: 0;
    transition: ease-in-out 1.2s;
    transform: translateX(-10%);
    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }
  span {
    font-family: ${fonts.letter3};
    margin-top: 10px;
    font-weight: 300;
    color: ${colors.pink};
    opacity: 0;
    transform: translateY(-10vh);
    transition: ease-in-out .7s;
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h3 {
    margin-top: 5vh;
    font-family: ${fonts.letter1};
    font-size: 35px;
    opacity: 0;
    scale: 0.4;
    transition: ease-in-out .7s;
    &.visible{
      opacity: 1;
      scale: 1;
    }
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