import styled from "styled-components";
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const ProjectsStyles = styled.div` 
  padding:0 5% ;
  padding-top: 20vh;
  background: ${colors.secondBlue};
  padding-bottom: 50vh;
  display: flex;
  img {
    object-fit: cover;
    width: 55%;
    height: 450px;
    &:hover{
      height: 100%;
    }
  }
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    img {
      width: 100%;
    }
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  .buttons {
    display: flex;
    margin-bottom: 5vh;
    align-items: center;
    button {
      cursor: pointer;
      background: #2a2747;
      border: none;
      width: 50px;
      height: 50px;
      transition: ease-in .2s;
      &:hover{
        background: #44425e;
      }
    }
    h2 {
      font-size: 17px;
      margin: 0 5%;
      font-family: ${fonts.letter2};
    }
  }
  h3 {
    font-size: 35px;
    font-family: ${fonts.letter1};
  }
  p {
    font-size: 15px;
    margin: 4vh 0;
    font-family: ${fonts.letter2} ;
    margin-left: 13% ; 
    &::before {
      content: '';
      position: absolute;
      margin-top: 1.6vh;
      left: 5%;
      display: block;
      width: 30px;
      height: .6vh;
      background: ${colors.pink};
    }
  }
  h4 {
    font-family: ${fonts.letter2};
    margin-right: 12%;
    font-size: 18px;
  }
  .github {
    margin-top: 6vh;
  }
  a {
    width: 50%;
    padding: 3vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.letter3};
    background: ${colors.darkPink};
    margin-top: 4vh;
    color: white;
    transition: ease-in-out .2s;
    &:hover{
      background: ${colors.secondBlue};
      border: 2px solid white;
      width: calc(50% - 4px);
    }
  }
  // responsivde design
  @media screen and (max-width: 750px) {
    padding-top: 15vh;
  }
`