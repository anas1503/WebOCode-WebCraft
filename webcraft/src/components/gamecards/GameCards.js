import React from 'react'
import './GameCard.scss'
const GameCards = () => {
    return (
        <div className="container">
            <h3>TRENDING NOW</h3>
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleIndicators" class="carousel slide game" data-bs-ride="carousel">
                        <div class="carousel-indicators ">
                            <button style={{ display: "none" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button style={{ display: "none" }} className="my-0 disabled" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row my-4">
                                    <div className="col-sm-3 ">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/Valorant.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>VALORANT</span> | Defy the Limits </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/pubg.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>PUBG</span> | Kill or be Killed </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/lastofus.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>LAST OF US 2</span> | Survive to Live </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/GTA5.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>GTA V</span> | Thug Life </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row my-4">
                                    <div className="col-sm-3 ">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/daysgone.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>DAYS GONE</span> | Defy the Limits </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/doomEternal.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>DOOM ETERNAL</span> | Defy the Limits </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/Cyberpunk.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>CYBERPUNK</span> | Defy the Limits </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ">
                                        <div class="card" style={{ width: "18rem", height: "23rem" }}>
                                            <img src="/assets/images/battlefield.png" class="card-img-top" style={{ width: "100%", height: "20rem", borderRadius: "6px" }} alt="..." />
                                            <div class="card-body px-0">
                                                <p class="card-text px-2"><span style={{ color: "#F94453" }}>BATTLEFIELD</span> | Defy the Limits </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default GameCards
