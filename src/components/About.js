import React from 'react';
import "./About.css"

const About = () => {
  return (
    <>
        <div className="container mb3 about_container" style={{minHeight:"100%"}}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
        <div className="left_container mt-5" style={{width:500}}>
        <h2>Meet <span style={{color:"orange"}}>Salim Sabkhan</span></h2>
        <p style={{color:"#666",letterSpacing:".5px",marginTop:2,lineHeight:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sem ac leo pulvinar porttitor. Proin dignissim ex vel cursus aliquam. Proin commodo felis tortor, at gravida orci eleifend vitae. Nam hendrerit nisi iaculis tempor venenatis. Sed sem erat, feugiat at ante in, lacinia congue lectus.</p>
        </div>
        <div className="right_container mt-3">
            <img src="port.jpg" alt=""></img>
        </div>
        </div>
        </div>
    </>
  )
}

export default About