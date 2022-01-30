import React from 'react';
// image
import profile  from '../../images/wallpaper6.jpg'
// styled components
import { Div, Info } from '../../styles/about/whoAmI'

function WhoAmI() {
  return (
    <Div>
      <Info>
        <div className='section' >
          <h2>Who am I</h2>
          <h3>
            I'm Freddy Velarde, 20 years old and I'm from Bolivia.
            I'm a programmer and web developer front-end, Everything I learned are self-taught
            over many mounths and throght many projects made.
          </h3>
        </div>
        <div className='section' >
          <h2>Skills & tools</h2>
          <h3>
            Software development: Git(version controller), terminal/linux, english/b1,  
          </h3>
          <h3>
            front-end: Html, css/responsive-design, javascript, ReactJs Redux/ToolkIt, Hooks, styled-components, react-router,   
          </h3>
        </div>
        <a href="#contact">Get in touch</a>
      </Info>

      <img src={profile} width='50px' alt="" />
    </Div>
  );
}

export default WhoAmI;
