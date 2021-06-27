import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_row1">
                <div className="footer-elements">
                <img src="/assets/images/webCraftLogo.png" alt="LOGO"  style={{ marginTop:"-3px",width:"52px", height:"57px"}}/>
                    <p>PLAYER  SUPPORT</p>
                    <p>CANDIDATE  PRIVACY</p>
                    <p>TERMS OF SERVICES</p>
                    <p>PRIVACY NOTICE</p>
                    <p>ACCESSIBILITY</p>
                </div>
                <p style={{ color: "#F94453", marginTop: "35px" }}>TO THE SURFACE  ^ </p>
            </div>
            <p className="division"></p>
            <div className="footer_row2">
                <p className="copy">© 2021 WebCraft Games. All Rights Reserved.</p>
                <div className="icons">
                <i class="bi-facebook" style={{fontSize: "1.2rem", color: "8A8887"}}></i>
                <i class="bi-twitter" style={{fontSize: "1.2rem", color: "8A8887"}}></i>
                <i class="bi-linkedin" style={{fontSize: "1.2rem", color: "8A8887"}}></i>
                <i class="bi-youtube" style={{fontSize: "1.2rem", color: "8A8887"}}></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
