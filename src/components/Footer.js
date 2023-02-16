import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Salim Sabkhan</h4>
             <p> Salim Sabkhan All rights reserved</p> 
            <p className='d-flex'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Other Information</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, adipisci.</p>
            <p>info@hsalimsabkhan.com</p>
            <p>+91 012345678</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer