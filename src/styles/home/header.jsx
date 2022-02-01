import styled from 'styled-components';
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const HeaderStyle = styled.header`
  z-index: 200;
  padding: 0 5%;
  /* height: ; */ // this wiil be in 
  height: ${({scroll}) => !scroll ? '20vh' : '12vh'};
  display: grid;
  grid-template-columns: 30% 70%;
  position: fixed;
  transition: ease-in .5s;
  top: 0;
  left: 0;
  width: 90%;
  background: ${colors.darkBlue};
  align-items: center;
  justify-content: space-between;
  a {
    cursor: pointer;
    /* font-family: Helvetica, sans-serif ; */
    font-family: ${fonts.letter2};
    color: ${colors.white};
    font-size: 30px;
    transition: ease-in-out .5s;
    span {
      color: ${colors.pink};
    }
    &:hover {
      /* font-family: ${fonts.letter2}; */
      transform: scale(1);
      color: ${colors.pink};
      span {
        color: ${colors.white};
      }
    }
  }
  // navegation
  nav {
    display: flex;
    justify-content: flex-end;
    /* width: 25%; */
    /* margin-left: 10%; */
    a {
      color: ${colors.gray};
      font-size: 17px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 200 !important;
      margin-right: 5%;
      letter-spacing: 2px;
      transition: .2s;
      &:hover {
        color: ${colors.white};
      }
    }
    a.effect::before {
        content: "•";
         --tw-text-opacity: 1;
        color: rgba(253,67,112,var(--tw-text-opacity));
        transition-duration: .2s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
        font-size: 2.25rem;
        line-height: 24px;
        position: relative;
        top: auto;
        bottom: auto;
        right: 5px;
        vertical-align: middle;
      }
  }
    div {
      display: none;
    }
  @media screen and (max-width: 1015px) {
    /* padding: 0 10%; */
    /* nav {
      margin-right: 15%;
    } */
  }
  // code to header becomes to a resposive navbar.
  @media screen and (max-width: 770px) {
    display: flex;
    background-color: #0d1b36d2;
    backdrop-filter: blur(6px); 
    height: 12vh;
    top: 88vh;
    bottom: 0%;
    right: 0%;
    padding: 0 4%;
    a {display: none;}
    nav {
      display: none;
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      /* background-color: red; */
      align-items: center;
      a {
        text-align: center;
        color: ${colors.gray} !important ;
        display: block;
        /* padding-top: 3vh; */
      }
    }
  }
  @media screen and (max-width: 450px) {
    div a {
      font-size: 10px;
    }
  }
` 