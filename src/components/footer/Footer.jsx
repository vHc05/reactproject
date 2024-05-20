import "./Footer.css"

function Footer() {

  return (
      <footer className="footerBody">
        <div className="footer">
          <div className="footerRow">
            <ul>
              <li><a href="/contact" className="links">Contáctanos</a></li>
              <li><a href="/cookies" className="links">Politica de Privacidad</a></li>
              <li><a href="/terms+and+conditions" className="links">Terminos y Condiciones</a></li>
              <li><a href="/news.xml" target="_blank" rel="noopener noreferrer" className="links">Ver noticias en RSS</a></li>
            </ul>
          </div>

          <div className="footerRow">
            <a href="https://github.com/vHc05/reactproject"><img className="footerImg" src="../../public/photos_footer/github.png" /></a>
            <a href="#"><img className="footerImg2" src="../../public/photos_footer/rss.png" /></a>
          </div>

          <div className="footerRow">
            Copyright 2024&copy; Victor Hernandez Todos los derechos reservados
          </div>
        </div>
      </footer>
  )

}

export default Footer;