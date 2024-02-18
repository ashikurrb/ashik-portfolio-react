import React from 'react';
import './Demo.css';
import logo from '../../Assets/logo512.png';
const Demo = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    Ashikur Rahman Bhuiyan
                    <br />
                    <code className='textStyle'>
                        <a className='textStyle' href="https://www.google.com/search?q=%40ashikurrb"> @ashikurrb</a>
                    </code>
                </h2>
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