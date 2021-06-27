import React from 'react';


const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
     <img src="/assets/images/webCraftLogo.png" alt="LOGO"  style={{width:"72px", height:"77px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{color:"whitesmoke" ,fontWeight:"bold"}}>WHO WE ARE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"whitesmoke",fontWeight:"bold"}}>WORK WITH US</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" style={{color:"whitesmoke",fontWeight:"bold"}} >STORE</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <button className="btn btn-outline-success" type="submit" >Sign In</button>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar;
