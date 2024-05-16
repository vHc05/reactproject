import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import fotos from "../../models/fotos/fotos";
import "./Gallery.css"

function Fotos() {
  return (
    <>
      <Header />
      <h1>La Ruta del Agua | Galería</h1>

      {
        fotos.map((foto)=>(
          <img src={`/fotos/${foto.src}`} alt="Error al cargar la imagen " className="gallery-array-images" />
        ))
      }
      <Footer />
    </>
  )
}

export default Fotos;
