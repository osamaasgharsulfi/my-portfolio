import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className='section-container'>
      <Header
        heading="About Me"
        subHeading=" Software Engineer | Backend Engineer">
      </Header>
      <div className='about-main'>  
        <div className='about-main-left'>
          <h3 className='about-sub-heading'>Developer</h3>
          <p className='about-sub-heading-details'>
            I’m a self-taught <u>software engineer</u>. building software for people and businesses. I love building software that solves real-world problems, add value to society through technology.
          </p>
          <h3 className='about-sub-heading'>Backend Engineer</h3>
          <p className='about-sub-heading-details'>
            I'm a backend engineer who really enjoys working on the behind-the-scenes part of software. I like making sure everything runs smoothly and efficiently without people even noticing! <a href="https://anandbaraik.hashnode.dev/" target="_blank" rel="noreferrer"></a>
          </p>
        </div>
        <div className='about-main-right'>
          <img
            src={aboutAnime}
            alt="about-anime"
            className="about-anime"
            loading="lazy"
          />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default About