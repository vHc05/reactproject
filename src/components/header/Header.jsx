import "./Header.css";

function Header() {
  return (
    
    <div className="header">
      <img className="logo" src="../../../logo.ico"></img>
      <a href="/home"><button class="header-button">Inicio</button></a>
      <a href="/gallery"><button class="header-button">Galeria</button></a>
      <a href="/route"><button class="header-button">Rutas</button></a>
    </div>
    
  )
}

export default Header;