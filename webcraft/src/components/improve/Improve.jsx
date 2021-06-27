import React from "react";

const Improve = () => {
  return (
    <>
      <div className="improve">
        <div className="improveContent">
          <div classname="videoCards">
            <div class="card">
              <iframe
                className="card-img-top"
                src={`https://www.youtube.com/embed/Pj4Ch2vZ4bc`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/PMg2SyiuGFU`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/2FXc8jZ5Or4`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Improve;
