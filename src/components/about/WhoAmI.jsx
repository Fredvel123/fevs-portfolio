import React, { useEffect, useRef } from 'react';
// image
import profile  from '../../images/wallpaper6.jpg'
// styled components
import { Div, Info } from '../../styles/about/whoAmI'

function WhoAmI() {
  const element = useRef(null);
  //
  const callback = observer => {
    observer.forEach(observe => {
      if(observe.isIntersecting) {
        observe.target.classList.add('visible');
      }else {
        observe.target.classList.remove('visible');
      }
    });
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element.current)
  }, []);
  

  return (
    <Div>
      <Info>
        <div ref={element} className='section'>
          <h2>Who am I</h2>
          <h3>
            I'm Freddy Velarde, 20 years old and I'm from Bolivia.
            I'm a programmer and web developer front-end, Everything I learned are self-taught
            over many mounths and throght many projects made.
          </h3>
        </div>
        <div ref={element} className='section'>
          <h2>Skills & tools</h2>
          <h3>
            Software development: Git(version controller), terminal/linux, english/b1,  
          </h3>
          <h3>
            front-end: Html, css/responsive-design, javascript, ReactJs Redux/ToolkIt, Hooks, styled-components, react-router,   
          </h3>
        </div>
        <a ref={element}  href="#contact">Get in touch</a>
      </Info>
      <img ref={element} src={profile} width='50px' alt="" />
    </Div>
  );
}

export default WhoAmI;