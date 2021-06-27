import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_row1">
                <div className="footer-elements">
                    <p >LOGO</p>
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
            </div>
        </div>
    )
}

export default Footer
