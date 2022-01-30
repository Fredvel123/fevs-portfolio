import styled from "styled-components";
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';

export const Div = styled.div`
  margin: 17vh 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    img {
      /* object-fit: cover; */
      width: 55%;
      height: 100%;
    }
  }
`

export const Info = styled.div`
margin-right: 20%;
  .section {
    margin: 10vh 0;
    h2 {
      color: white;
      font-size: 18px;
      font-family: ${fonts.letter1};
      margin-bottom: 6vh;
      margin-left: 45px;
      &::before {
        content: '';
        position: absolute;
        display: block;
        margin-top: 12px;
        left: 5%;
        width: 30px;
        height: .6vh;
        background-color: ${colors.darkPink};
      }
    }
    h3 {
      font-size: 16px;
      font-family: ${fonts.letter2};
      line-height: 5vh;
      font-weight: 50;
      margin-bottom: 2.4vh;
    }
  }
  a {
    color: white;
    font-family: ${fonts.letter2};
    background: ${colors.darkPink};
    padding: 3vh 5%;
    transition: ease-in .3s;
    &:hover{
      background: ${colors.secondBlue};
    }
  }
  @media screen and (max-width: 750px) {
    margin-right: 0;
  }
`