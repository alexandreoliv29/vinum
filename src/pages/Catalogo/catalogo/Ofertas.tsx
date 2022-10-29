import React from "react";
import { Link } from "react-router-dom";

export const Ofertas = () => {
    return (
        <section className="">
            <h1 className="d-flex justify-content-center pb-2 position-relative">Catálogo</h1>
            <br></br>

            <div className="ofertas container d-flex justify-content-center">
                <h2>Melhores Ofertas</h2>
            </div>

            <br></br>
            <br></br>

            <div id="carouselPromos" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="d-flex justify-content-around">
                            <div className="d-flex flex-column justify-content-center">
                                <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                                <p>Catena Chardonnay</p>
                                <h3 className='text-decoration-line-through'>De 181,02</h3>
                                <p>Por 149,00</p>
                                <button>COMPRAR</button>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                                <p>Catena Chardonnay</p>
                                <h3 className='text-decoration-line-through'>De 181,02</h3>
                                <p>Por 149,00</p>
                                <button>COMPRAR</button>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                                <p>Catena Chardonnay</p>
                                <h3 className='text-decoration-line-through'>De 181,02</h3>
                                <p>Por 149,00</p>
                                <button>COMPRAR</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">

                        <div className="d-flex justify-content-around">
                            <div className="d-flex flex-column justify-content-center">
                                <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                                <p>Catena Chardonnay</p>
                                <h3 className='text-decoration-line-through'>De 181,02</h3>
                                <p>Por 149,00</p>
                                <button>COMPRAR</button>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                                <p>Catena Chardonnay</p>
                                <h3 className='text-decoration-line-through'>De 199,00</h3>
                                <p>Por 89,99</p>
                                <button>COMPRAR</button>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                                <p>Catena Chardonnay</p>
                                <h3 className='text-decoration-line-through'>De 199,00</h3>
                                <p>Por 89,99</p>
                                <button>COMPRAR</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselPromos" data-bs-slide="prev">
                    <i className="text-red fw-bold fs-2 fa-solid fa-arrow-left"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselPromos" data-bs-slide="next">
                    <i className="fa-solid fa-arrow-right text-red fw-bold fs-2"></i>
                </button>
            </div>

        </section>
    )
}
