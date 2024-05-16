import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Home.css"

function Home() {
  return (
    <>
      <Header />
      <h1 class="home-h1">La Ruta del Agua</h1>
      <div class="home-container">
        <div class="home-row">
          <div class="home-column-66">
            <img class="home-images" src="../../public/fotos_home/corredor_paisajistico.jpg"></img>
          </div>
          <div class="home-column-33">
            <p class="home-text">Esta ruta peatonal y ciclista conecta a lo largo de 13 kilómetros las medianías teldenses
              con la costa por el cauce de la cuenca hidrográfica de Telde. El sendero comienza en el
              sector bajo del Barranco de los Cernícalos, en pleno Paisaje Protegido de Lomo Magullo,
              un espacio distinguido por su vinculación con la economía tradicional canaria, y se
              extiende hasta la playa de Bocabarranco, junto al Sitio de Interés Científico de Jinámar,
              de alto valor por albergar materiales sedimentarios de la Formación Detrítica de Las
              Palmas y vegetación halófila y psamófila de interés, entre otros atractivos naturales.</p>
          </div>
        </div>
      </div>

      <div class="home-container">
        <div class="home-row">
          <div class="home-column-33">
            <p class="home-text">Datan del siglo XX. Durante todo un siglo han sido
              encuentro de mujeres que se acercan a este espacio cargadas con sus baldes y barreños
              para lavar la ropa. Aprovechan para las tertulias y las novelerías mientras secan los
              ropajes al sol. Se ha mantenido activo como punto de lavado hasta la actualidad.</p>
          </div>
          <div class="home-column-66">
            <img class="home-images" src="../../public/fotos_home/Acequia_lavadero_de_la_Heredad.jpg"></img>
          </div>
        </div>
      </div>

      <div class="home-container">
        <div class="home-row">
          <div class="home-column-66">

            <p class="home-text">Construido según planos diseñados por el teldense Juan de León
              y Castillo a finales del siglo XIX, constituye una de las piezas emblemáticas de Telde, y
              forma parte de la importante historia de acueductos que canalizaban y repartían las aguas
              por toda la vega agrícola.</p>
          </div>
          <div class="home-column-33">
            <img class="home-images" src="../../public/fotos_home/Acueducto_de_Los_Rios.jpg"></img>
          </div>
        </div>
      </div>

      <div class="home-container">
        <div class="home-row">
          <div class="home-column-66">
            <img class="home-images" src="../../public/fotos_home/dique_para_desvio_aguas.jpg"></img>
          </div>
          <div class="home-column-33">
            <p class="home-text">Se trata de una construcción que se realizaba
              habitualmente con el objetivo de elevar el nivel del agua de un arroyo con el fin de
              derivar parte del caudal a las acequias cercanas para facilitar con ello el riego de los
              campos y cultivos de la zona.</p>
          </div>
        </div>
      </div>

      <div class="home-container">
        <div class="home-row">
          <div class="home-column-66">
            <p class="home-text">Son pozos de ventilación asociados a minas o galerías filtrantes que
              captan el agua subterránea de los barrancos.Construida en el S. XX con cantos de piedra
              seca.</p>
          </div>
          <div class="home-column-33">
            <img class="home-images" src="../../public/fotos_home/Campana_de_agua.jpg"></img>
          </div>
        </div>
      </div>

      <div class="home-container">
        <div class="home-row">
          <div class="home-column-66">
            <img class="home-images" src="../../public/fotos_home/Mina_molino_Longueras.jpg"></img>
          </div>
          <div class="home-column-33">
            <p class="home-text">Es una de las obras de ingeniería hidráulica mas
              significativas del municipio. Tras su construcción en la primera década de 1900, la mina
              sirvió también para el molino decimonónico de Las Longueras. La estructura está
              construida en piedra y barro con techo de agua, formó parte importante de las labores de
              la molienda de millo de la zona.</p>
          </div>
        </div>
      </div>

      <div class="home-container">
        <div class="home-row">
          <div class="home-column-66">
            <p class="home-text">Levantado a mediados del siglo XIX, es una de las piezas
              destacadas del ingeniero teldense León y Castillo, proyectada para conectar el conjunto
              histórico de San Juan y San Francisco con el núcleo de Caserones Bajos y, así cruzar el
              ancho cauce del barranco Real de Telde. Con casi 100 metros de longitud, el puente,
              hecho de piedra de cantería, cuenta con siete arcos de medio punto que descansan sobre
              grandes pilarees.</p>
          </div>
          <div class="home-column-33">
            <img class="home-images" src="../../public/fotos_home/Puente_siete_ojos.jpg"></img>
          </div>
        </div>
      </div>

      <div class="home-container">
        <div class="home-row">
          <div class="home-column-66">
            <img class="home-images" src="../../public/fotos_home/Puente_Tara.jpg"></img>
          </div>
          <div class="home-column-33">
            <p class="home-text">Se concibió a principios del siglo XX como vía de comunicación para
              facilitar el tránsito de la poblacíón a la destilería y la azucarera de Telde. Así, se salvaba
              la distancia que separaba el barranco de los Ríos. Está construido con piedra y ladrillo y
              un arco central de considerable envergadura y unos escasos metros de longitud.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;