import "./Footer.css"

function Footer() {

  return (
    <body class="footerBody">
      <footer>
        <div class="footer">
          <div class="footerRow">
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-github-alt" /></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </div>

          <div class="footerRow">
            <ul>
              <li><a href="/contact" className="links">Contáctanos</a></li>
              <li><a href="/cookies" className="links">Politica de Privacidad</a></li>
              <li><a href="/terms+and+conditions" className="links">Terminos y Condiciones</a></li>
            </ul>
          </div>

          <div class="footerRow">
            Copyright 2024&copy; Victor Hernandez Todos los derechos reservados
          </div>
        </div>
      </footer>
    </body>
  )

}

export default Footer;