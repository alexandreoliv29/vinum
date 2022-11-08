import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";


let auxCurr = 0
let auxNext = 1

export const Ofertas = () => {

    const [wines, setWines] = useState<WineDto[]>([])

    useEffect(() => {
        api.get("/wine/listAll")
            .then((response) => {
                response.data.forEach((wine: any) => {
                    if ((wine.sale) != '0')  setWines(wines => [...wines, wine])
                })
            })
            .catch(err => console.error("ops! ocorreu um erro" + err));
    }, []);

    return (
        <section className="container">
            <h2 className="text-center pt-5  text-red">Melhores Ofertas</h2>

            <div id="carouselPromos" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-around">
                        {
                                wines[0] &&
                                <div key={0} className="d-flex flex-column justify-content-center align-items-center">
                                    <a href={`/inside/${wines[0]._id}`}><img width={150} src={wines[0].image} alt="garrafaVinho.svg" /></a>
                                    <p>{wines[0].name}</p>
                                    <h4 className='text-decoration-line-through'>De R$ {wines[0].price}</h4>
                                    <p>Por R$ {(wines[0].sale)}</p>
                                    <button className="btn btn-gold mw-120">APROVEITAR</button>
                                </div>
                            }
                            {
                                wines[1] &&
                                <div key={1} className="d-flex flex-column justify-content-center align-items-center">
                                    <a href={`/inside/${wines[1]._id}`}><img width={150} src={wines[1].image} alt="garrafaVinho.svg" /></a>
                                    <p>{wines[1].name}</p>
                                    <h4 className='text-decoration-line-through'>De R$ {wines[1].price}</h4>
                                    <p>Por R$ {(wines[1].sale)}</p>
                                    <button className="btn btn-gold mw-120">APROVEITAR</button>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        wines.map((wine, index) => {
                            let curr = wines[index + auxCurr]
                            let next = wines[index + auxNext]
                            auxCurr++
                            auxNext++

                            if (index > 1 && next) {
                                console.log("curr: ", curr)
                                console.log("next: ", next)
                                return (
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-around mt-5">
                                            <div key={index} className="d-flex flex-column justify-content-center align-items-center">
                                                <a href={`/inside/${curr._id}`}><img width={150} src={curr.image} alt="garrafaVinho.svg" /></a>
                                                <p>{curr.name}</p>
                                                <h4 className='text-decoration-line-through'>De R$ {curr.price}</h4>
                                                <p>Por R$ {(curr.sale)}</p>
                                                <button className="btn btn-gold mw-120">APROVEITAR</button>
                                            </div>
                                            <div key={index + 1} className="d-flex flex-column justify-content-center align-items-center">
                                                <a href={`/inside/${next._id}`}><img width={150} src={next.image} alt="garrafaVinho.svg" /></a>
                                                <p>{next.name}</p>
                                                <h4 className='text-decoration-line-through'>De R$ {next.price}</h4>
                                                <p>Por R$ {(next.sale)}</p>
                                                <button className="btn btn-gold mw-120">APROVEITAR</button>

                                            </div>

                                        </div>
                                    </div>
                                )
                            }

                            return null
                        })
                    }
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

