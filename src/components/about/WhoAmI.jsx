import React, { useEffect, useRef } from 'react';
// image
import profile  from '../../images/wallpaper6.jpg'
// styled components
import { Div, Info } from '../../styles/about/whoAmI'

function WhoAmI() {
  const paragraph1 = useRef(null);
  const paragraph2 = useRef(null);
  const image = useRef(null);
  const button = useRef(null);
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
    rootMargin: '10% 0px -10% 0px',
    threshold: 0.5
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(paragraph1.current)
    observer.observe(paragraph2.current)
    observer.observe(image.current)
    observer.observe(button.current)
    // eslint-disable-next-line
  }, []);  
  
  return (
    <Div>
      <Info>
        <div ref={paragraph1} className='section'>
          <h2>Who am I</h2>
          <h3>
            I'm Freddy Velarde, 20 years old and I'm from Bolivia.
            I'm a programmer and front-end web developer, Everything I learned are as self-taught learner,
            over many mounths and throght many projects made.
          </h3>
        </div>
        <div ref={paragraph2} className='section'>
          <h2>Skills & tools</h2>
          <h3>
            <span>Software development:</span> Git(version controller), terminal/linux, english(b-1).  
          </h3>
          <h3>
            <span>Front-end:</span> Html, css/responsive-design, javascript, ReactJs, Redux/ToolkIt, styled-components, react-router.   
          </h3>
        </div>
        <a ref={button}  href="#contact">Get in touch</a>
      </Info>
      <img ref={image} src={profile} width='50px' alt="" />
    </Div>
  );
}

export default WhoAmI;