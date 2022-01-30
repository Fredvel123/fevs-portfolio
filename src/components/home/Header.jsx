import React, { useState } from 'react';
// styled components
import { HeaderStyle } from '../../styles/home/header';
// icons 
import { HomeOutlined, CodeOutlined, UserOutlined, MailOutlined, ForkOutlined } from '@ant-design/icons'

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
  // styles
  const style = {
    fontSize: '23px',
    color:'white',
  };

 
  return (
    <HeaderStyle scroll={scroll}>
      <a href='#home'><span>Freddy</span>Velarde</a>
      <nav >
        <a href="#work">   Work </a>
        <a href="#about"> About </a>
        {/* <a href="#skills"> Skills </a> */}
        <a href="#contact"> Contact </a>
      </nav>
      <div>
        <a href="#home"><HomeOutlined style={style}/></a>
        <a href="#work"><CodeOutlined style={style}/></a>
        <a href="#about"><UserOutlined style={style}/></a>
        {/* <a href="#skills"><ForkOutlined style={style}/></a> */}
        <a href="#contact"><MailOutlined style={style}/></a>       
      </div>
    </HeaderStyle>
  );
}

export default Header;
