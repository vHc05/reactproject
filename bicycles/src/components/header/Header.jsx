import "./Header.css";

function Header() {
  return (
    
    <div className="header">
      <img className="logo" src="../../../logo.ico"></img>
      <a href="/home"><button>Inicio</button></a>
      <a href="/gallery"><button>Galeria</button></a>
      <a href="/route"><button>Rutas</button></a>
    </div>
    
  )
}

export default Header;