import styled from "styled-components";
// colors and fonts
import colors from '../tools/colors.json'
import fonts from '../tools/fonts.json'

export const Page = styled.div`
  margin: 0 5% ;
  padding-top: 25vh;
  display: flex;
  margin-bottom: 10vh !important ;

  img {
    height: 500px;
    margin-left: 5%;
    border-radius: 10% 30% 25% 73%;
    transition: ease-in .3s;
    &:hover{
      border-radius: 1%;
    }
  }
  @media screen and (max-width: 1015px) {
    margin: 0 10%;
    padding-top: 35vh;
    img {
      display: none;
    }
  }
  @media screen and (max-width: 770px) {
    padding-top: 15vh;
  }
`

export const Letters = styled.div`
  h3 {
    letter-spacing: 1px;
    font-family: ${fonts.letter1} ;
    font-size: 55px;
    line-height: 2em;
    
    /* display: block;
    white-space: nowrap;
    border-right: 4px solid;
    width: 57ch;
    animation: typing 2s steps(57),
    blink .5s infinite step-end alternate ;
    overflow: hidden; */
    span {
      color: ${colors.darkPink};
    }
  }
  /* @keyframes typing {
      from { width: 0; }
    }
    @keyframes blink {
      50% { border-color: transparent; }
    } */
  h4 {
    font-family: ${fonts.letter2};
    margin: 3vh 0;
    margin-bottom: 10vh;
    font-size: 17.5px;
  }
  a {
    font-family: ${fonts.letter2};
    margin: 4vh 0;
    background-color: ${colors.pink};
    padding: 3vh 6%;
    color: #e2e2e2;
    transition: ease-in .3s;
    &:hover{
      background: ${colors.secondBlue};
    }
  }
  @media screen and (max-width: 1150px) {
    h3 {
      font-size: 40px;
      line-height: 1.7em;
    } 
  }
  @media screen and (max-width: 770px) {
    h3 {
      font-size: 33px;
      line-height: 1.7em;
    } 
    h4 {
      font-size: 14px;
    }
  }
`