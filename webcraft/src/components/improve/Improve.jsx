import React from "react";

const Improve = () => {
  return (
    <>
      <div className="improve">
        <div className="improveContent">
          <h1>IMPROVE YOUR GAME</h1>
          <div className="videoCards">

            <div className="video-card">
              <iframe
                className="card-media"
                src={`https://www.youtube.com/embed/Pj4Ch2vZ4bc`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            <p>
              Learn to aim from best players
            </p>
            </div>
            <div className="video-card">
              <iframe
                className="card-media"
                src={`https://www.youtube.com/embed/PMg2SyiuGFU`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <p>
                Learn how best players move
              </p>
            </div>
            <div className="video-card">
              <iframe
                className="card-media"
                src={`https://www.youtube.com/embed/2FXc8jZ5Or4`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <p>
                Master your agent
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Improve;
