import React from 'react';
import './about.css';
import Nav from '../../component/nav/nav';

const About = () => {
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
                        <img src='./images/about/rainbowCat.jpg' alt='rainbow cat' />
                        <p>
                            my name's gator! 
                        </p>
                    </div>
                    
                    <div className='aquarium-column sidebar-column'>
                        <h2>LINKS !</h2>
                        <ul className='link-list'>
                            <li><a href='https://github.com/gator-bones'>github</a></li>
                        </ul>
                    </div>
                    
                    <div className='aquarium-column sidebar-column'>
                        <h2>LINKS !</h2>
                        <ul className='todo-list'>
                        </ul>
                    </div>

                    <div className='aquarium-column main-content-column'>
                        
                    </div>

                    <div className='aquarium-column sidebar-column'>
                        <h2>LINKS !</h2>
                        <ul className='todo-list'>
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

export default About;