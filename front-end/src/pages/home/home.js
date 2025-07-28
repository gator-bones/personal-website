import React from 'react';
import './home.css';
import Nav from '../../component/nav/nav';

const Home = () => {
    return (
        <div>
            <div className='big-aquarium-container'>

                <div className='site-header-image-area'>
                </div>

                <div className='da-scroll'>
                    <div className='scroll-text'>
                        <img src='./images/blinkies/friday_13.gif' alt='friday the 13th blinkie' />
                        <img src='./images/blinkies/something_fishy.gif' alt='fish' />
                        <img src='./images/blinkies/toxic_mold.gif' alt='toxic mold babee' />
                        <img src='./images/blinkies/da_blinkie.gif' alt='da blinkie?!' />
                        <img src='./images/blinkies/i_miss_her_tails.jpg' alt='i miss her tails' />
                    </div>
                </div>

                <div className='aquarium-content-columns'>
                    <div className='aquarium-column menu-column'>
                        <Nav />
                    </div>

                    <div className='aquarium-column main-content-column'>
                        <div className='welcome-message-box'>
                            <h1>WELCOME !</h1>
                            <p>
                                hello ! welcome to my corner of the web. this
                                is my personal website, which is where i will
                                say <i>many</i> things about my interests and what's
                                happening in my life. i'll try and update this site
                                as often as i can, but i'm probably gonna forget.
                                if something's broken, i'll try and fix it as soon
                                as i can !
                            </p>
                        </div>
                        <div className='welcome-message-box'>
                            <h3>
                            WHAT'S NEW <span style={{ float: 'right' }}>mm/dd/yyyy</span>
                            </h3>
                            <ul className='welcome-list'>
                                <li>07/27/2025 - i added a footer :)</li>
                                <li>07/27/2025 - i did something else</li>
                            </ul>
                        </div>
                    </div>

                    <div className='aquarium-column sidebar-column'>
                        <h2>TO-DO LIST</h2>
                        <ul className='todo-list'>
                            <li>fih</li>
                            <li>add a button that opens up every movie that has dinosaurs</li>
                        </ul>
                    </div>
                </div>

                <div className='site-footer'>
                    <p>
                    created: 2025
                    <img src='./images/decor/fishDividerFooter.png' alt='fish divider'></img>
                    site updated: 7/27/2025
                    </p>
                </div>
            </div>

            <img src='./images/decor/loserTag.png' 
            alt='loser tag' className='loser-tag' />
        </div>
    );
}

export default Home;