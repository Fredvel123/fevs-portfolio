import React, { useRef, useEffect } from 'react';
// styled components
import { TitleStyles } from '../../styles/contact/title';

function Title() {
  const letter1 = useRef(null);
  const letter2 = useRef(null);
  const letter3 = useRef(null);
  const letter4 = useRef(null);
  // function

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
    rootMargin: "0px",
    threshold: 0.4
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(letter1.current)
    observer.observe(letter2.current)
    observer.observe(letter3.current)
    observer.observe(letter4.current)
  }, []);
  
 
  return (
    <TitleStyles>
      <h2 ref={letter1} >Contact</h2>
      <h3 ref={letter2}>
        Do you want to work with me?
      </h3>
      <h4 ref={letter3}>
        If you want to work with me, you can find me <br />
        through my social media networks <br />
        or send me an email to:
      </h4 >
      <span ref={letter4} >freddyvelarde59@gmail.com</span>
    </TitleStyles>
  );
}

export default Title;
