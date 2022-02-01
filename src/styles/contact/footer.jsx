import styled from "styled-components";
// icons and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const FooterStyles = styled.div` 
  padding: 12vh 5%;
  padding-bottom: 10vh;
  background: ${colors.secondBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .letter {
    h3 {
      font-size: 15px;
      font-family: ${fonts.letter2};
      font-weight: 50;
      margin-bottom: 2vh;
      color: white;      
      opacity: 0;
      transform: translateY(-6vh);
      transition: .7s;
    } 
    h3 a {
      color: #a7a7a7;
    }
    &.visible {
      h3 {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  @media screen and (max-width: 770px) {
    padding-bottom: 18vh;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    flex-direction: column-reverse ;
    justify-content: center;
    align-items: center;
    .letter {
      margin-top: 3vh;
    }
  }
` 


export const Icons = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-end;
  a {
    opacity: 1;
    transform: translateX(-10%);
    transition: .7s;
    padding: 12px;
    margin-left: 5%;
    background: #2f3153;
    transition: ease-in-out .3s;
    &:hover{
      transform: scale(1.1);
      background: ${colors.darkPink};
    }
  }
  a .button {
    font-size: 30px;
    color: white;
  }
  &.visible {
    a {
      opacity: 1;
      transform: translateX(0);
    }
  }
  // responsive design
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: space-around;
  }
`