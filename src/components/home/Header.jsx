import React, { useState } from 'react';
// styled components
import { HeaderStyle } from '../../styles/home/header';

function Header() {
  const [scroll, setscroll] = useState(false);
  const headerReduceHeight = () => {
    if(window.scrollY > 50) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  }
  window.addEventListener('scroll', headerReduceHeight);
  return (
    <HeaderStyle scroll={scroll} >
      <a href='#home'><span>Freddy</span> Velarde</a>
      <nav >
        <a href="#work"> Work </a>
        <a href="#about"> About </a>
        <a href="#skills"> Skills </a>
        <a href="#contact"> Contact </a>
      </nav>
      {/* <HomeOutlined />
      <CodeOutlined />
      <UserOutlined />
      <MailOutlined />
      <ForkOutlined /> */}
    </HeaderStyle>
  );
}

export default Header;
