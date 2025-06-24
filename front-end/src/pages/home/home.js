import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div>
            <div className='da-scroll'>
                <div className='scroll-text'>
                    <img src='./images/blinkies/friday_13.gif' alt='friday the 13th blinkie' />
                    <img src='./images/blinkies/something_fishy.gif' alt='fish' />
                    <img src='./images/blinkies/toxic_mold.gif' alt='toxic mold babee' />
                    <img src='./images/blinkies/da_blinkie.gif' alt='da blinkie?!' />
                </div>
            </div>
            <div className='home-container'>
                <h1>WELCOME !</h1>
                <p>
                    hello ! welcome to my corner of the web. this 
                    is my personal website, which is where i will 
                    say <i>many</i> things about my interests and what's 
                    happening in my life. this website is constantly
                    being updated, so feel free to look around. there's 
                    (hopefully) lots to find here, so click around and 
                    see what happens !
                    - g
                </p>
            </div>
        </div>
    )
}

export default Home