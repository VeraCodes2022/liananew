import React from 'react';
import SubNav from './SubNav/SubNav';
import TopNav from './SubNav/TopNav';
import MainNav from './MainNav/MainNav';



function Header() {
  return (
    <div>
      <TopNav/>
      <MainNav/>
    </div>
  )
}

export default Header;