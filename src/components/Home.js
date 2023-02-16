import React from 'react';
import "./Home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className='container home_container'>
      <div className='home_innerdiv'>
      <div className='left_div'>
        <h2>Welcome to <span style={{color:"orange"}}>Salim Sabkhan</span></h2>
        <p style={{color:"#666",letterSpacing:".5px",marginTop:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sem ac leo pulvinar porttitor. Proin dignissim ex vel cursus aliquam. Proin commodo felis tortor, at gravida orci eleifend vitae. Nam hendrerit nisi iaculis tempor venenatis. Sed sem erat, feugiat at ante in, lacinia congue lectus.</p>
        {/* <div className='btn_div mt-4'>
            <Button variant="danger" style={{letterSpacing:"1px",border:"none",borderRadius:4,background:"#2f2d69",marginRight:24}}>Danger</Button>
            <Button variant="danger" style={{letterSpacing:"1px",border:"none",borderRadius:4,background:"#636cff"}}>Danger</Button>
        </div> */}
      </div>
      <div className='right_div'>
        <img src='program.svg' alt=''></img>
      </div>

      </div>

      </div>
    </>
  )
}

export default Home