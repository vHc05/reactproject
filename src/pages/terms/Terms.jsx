import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Document, Page } from 'react-pdf';


function Terms() {
  return (
    <>
      <Header />
      <h1>TERMINOS Y CONDICIONES</h1>
      <Document file="./Terminos_y_Condiciones.pdf"><Page></Page></Document>
      <Footer />
    </>
  );
}

export default Terms;