import React from "react";
import { Wines } from "./Wines"
import Footer from "../../components/footer";
import { Ofertas } from "./Ofertas";
import Sidebar from "../../components/Sidebar";

export const Catalogo = () => {
    return (
        <>
            <h2 className="d-flex justify-content-center pb-2 mt-5 pt-5 position-relative">Catálogo</h2>
            <Sidebar />
            <Ofertas />
            <Wines />
            <Footer /> 
        </>
    )
}