import React from 'react';


const  Highlights = (props) => {
  return (
    <>
    <div className='highlight'>
      <h1>HIGHLIGHTS</h1>

      <div className="content">
      <div className='video1'>

          <iframe
            width="853"
      height="480"
            src={`https://www.youtube.com/embed/cnwt9_sBa34`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded youtube"
          />
      </div>
      <div className="videos">
        <div className='video2'>

            <iframe
              width="400"
        height="230"
              src={`https://www.youtube.com/embed/2K2nwXlAsBc`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Embedded youtube"
            />
        </div>
        <div className='video3'>

            <iframe
              width="400"
        height="230"
              src={`https://www.youtube.com/embed/8vqGvjLOYic`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Embedded youtube"
            />
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Highlights;
