import React from 'react'
import './HomePage.css'
import Navbar from './Navbar'
// import logo from './images/abid.png'
function HomePage({img}) {
    return (
        <div className='home-container'>
            <Navbar />
            <div className="main-content">
                <div className="box">
                    <div className="title">
                        <h1>
                            <p>
                                <span className='fadedTitle'>HELLO</span>
                                <span>I'm</span>
                            </p>
                            <span className='mainTitle'>abid hassan</span>
                            <p>
                                <span>a</span>
                                <span className='mainTitle'>Full-Stack Developer</span>
                            </p>
                        </h1>
                    </div>

                    <div className="about-content">
                        <p className='about-something'>Welcome to my web developer portfolio! I'm Abid, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.</p>
                    </div>

                    <div className="buttons">
                        <button className="hire-me">HIRE ME</button>
                        <button className="portfolio">PORTFOLIO</button>
                    </div>
                </div>

                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage
