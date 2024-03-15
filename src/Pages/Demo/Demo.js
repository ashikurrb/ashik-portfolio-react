import React from 'react';
import './Demo.css';
import logo from '../../Assets/logo512.png';
const Demo = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&center=true&vCenter=true&multiline=true&random=false&height=100&lines=ASHIKUR+RAHMAN+BHUIYAN;%40ashikurrb" alt="" />
                <p>
                    <b>MERN Stack Web Developer</b>
                </p>
                <code>
                    React.js | Node.js | Express.js | MongoDB
                </code>
                <p >Contact me: <br />
                    <a className='textStyle' href="https://www.facebook.com/ashikurrb85" target='_new'><i class="fa-brands fa-facebook-f"></i></a>
                    &nbsp; &nbsp;
                    <a className='textStyle' href="https://www.twitter.com/ashikurrb" target='_new'><i class="fa-brands fa-x-twitter"></i></a>
                    &nbsp; &nbsp;
                    <a className='textStyle' href="https://www.instagram.com/ashikurrb" target='_new'><i class="fa-brands fa-instagram"></i></a>
                    &nbsp; &nbsp;
                    <a className='textStyle' href="mailto: ashikurrb85@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                </p>
            </header>
        </div>
    );
};

export default Demo;