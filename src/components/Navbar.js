import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import './Layout.css';
//import { Avatar } from '@material-ui/core';


function Navbar() {
  //const [sidebar, setSidebar] = useState(false);

  //const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='parent'>
      <div className='div1'>
        <ul className='nav-menu-items'>
           {SidebarData.map((item, index) => {
              return (
                <li key={index} className= 'item'>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}
          </ul>
        </div>
        <div className='div2'>
        <button  className='signout' >SIGN OUT</button>
        <img alt='CSD' src='../Assests/logo.png'/>
        </div>

        <div className='div3'>
        
            <h2>Calender showing upcoming events</h2></div>

            <div className='div4'>
            <h2>Calender showing upcoming events</h2>
            </div>
            <div className='div5'>
              <h2>Task/Reports</h2>
          
         </div>

</div>
      </>
  );
}

export default Navbar;