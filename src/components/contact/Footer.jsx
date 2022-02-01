import React, { useRef, useEffect } from 'react';
// icons
import { FacebookOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
// styled components
import { FooterStyles, Icons } from '../../styles/contact/footer';


function Footer() {
  const footer = useRef(null);
  const icons = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  } 
  
  const callback = observer => {
    observer.forEach(observe => {
      if(observe.isIntersecting) {
        observe.target.classList.add('visible')
      }else {
        observe.target.classList.remove('visible')
      }
    });
  }
   
  useEffect(() => {
    const oberver = new IntersectionObserver(callback, options);
    oberver.observe(footer.current);
    oberver.observe(icons.current);
  }, [] )

  return (
    <FooterStyles  >
      <div  ref={footer} className='letter' >
        <h3>© 2021 Freddy Velarde</h3>
        <h3>Design by <a href="https://dribbble.com/oliver" target='__blank' >Oliver Cederborg </a>  </h3>
      </div>
      <Icons ref={icons} >
        <a href="https://www.facebook.com/freddy.velarde.969/" target='__blank'><FacebookOutlined className='button' /></a>
        <a href="https://github.com/Fredvel123" target='__blank' ><GithubOutlined className='button' /></a>
        <a href="https://www.linkedin.com/in/fevs/" target='__blank' ><LinkedinOutlined className='button' /></a>
      </Icons>
    </FooterStyles>
  );
}

export default Footer;
