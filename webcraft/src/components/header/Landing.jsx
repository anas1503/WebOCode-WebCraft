import React from "react";
import NavBar from "./NavBar";

const Landing = () => {
  return (
    <>
      <div className="landing">

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3500"
        >
        <NavBar/>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/images/fortnite-L.png"
                className="d-block w-100"
                alt="fortnite"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/CSGO-L.png"
                className="d-block w-100"
                alt="CSGO"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/Valorant-L.png"
                className="d-block w-100"
                alt="Valorant"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/LeagueOfLegends-L.png"
                className="d-block w-100"
                alt="LeagueOfLegends"
              ></img>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Landing;
