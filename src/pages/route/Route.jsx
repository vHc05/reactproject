import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Route.css";

function Routeishon() {

  return (
    <>
      <Header />
      <h1 class="route-h1">La Ruta del Agua</h1>
      <div class="iframe-container">
      <iframe class="route-iframe" frameBorder="0" scrolling="no" src="https://es.wikiloc.com/wikiloc/embedv2.do?id=61455776&elevation=off&images=off&maptype=H"></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Routeishon;