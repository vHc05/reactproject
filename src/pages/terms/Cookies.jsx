import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Document, Page } from 'react-pdf';

function Cookies() {
  return (
    <>
      <Header />
      <h1>POLITICA DE COOKIES</h1>
      <Document file="./Politica_de_Cookies.pdf"><Page></Page></Document>
      <Footer />
    </>
  );
}

export default Cookies;