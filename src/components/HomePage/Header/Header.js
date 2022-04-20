// import React from 'react';
// import './Header.css';
// import myname from './Myname';
// // export default function Header() {
// //     return (
// //         <header>
// //             <div className="User__profileImage" />
// //             <div className="User__profileName">ROHAN SINGH</div>
// //             <div className="User_profileTitle">Welcome to TECHNICAL BLOGER.</div>   
// //              <myname/>
// //         </header>
// //     )
// // }
import React from 'react'
import './Header.css'
import Myname from './Myname'
const Header = () => {
  return (
        <header>
           <div className="User__profileImage" />
            <div className="User__profileName">ROHAN SINGH</div>
             <div className="User_profileTitle">Welcome to TECHNICAL BLOGER.</div>   
              <Myname/>
         </header>


  )
}

export default Header

