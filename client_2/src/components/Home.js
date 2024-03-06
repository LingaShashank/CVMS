import React from 'react';
import myLogo from './Logo.png';
//import Login from './Login';

const Home = () => {
  return (
    <div>
        <center>
            <h1>WELCOME TO CVMS</h1>
            <img src={myLogo} alt='KLU' style={{width:'30%',height:'20%'}}></img>

            <h2 className="section-title">Get Started Today!</h2>
        </center>
    </div>
  )
}

export default Home