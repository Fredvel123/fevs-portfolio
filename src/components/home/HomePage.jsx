import React from 'react';
// styled components
import { Letters, Page } from '../../styles/home/homePage';

function HomePage() {
  const imgUrl = 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
  return (
    <Page>
      <Letters id='home'>
        <h3>
          Hey, Im <span>Freddy</span>  <br /> 
          a <span>self-taught</span> programmer <br /> 
          & front-end developer. <br />
        </h3>
        <h4>Stick around to see some of my work.</h4>
        <a href="#work"> See my work </a>
      </Letters>
      <img src={imgUrl} alt="" />
    </Page>
  );
}

export default HomePage;
