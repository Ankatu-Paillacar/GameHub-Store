import { useState } from "react";

function Navigation({ vistaActual, setVistaActual, cantidadCarrito, onAbrirLogin }) {
  return (
    <header>
      <h1>
        <a onClick={() => setVistaActual('catalogo')} style={{ cursor: 'pointer' }}>
          GameHub Store 🦇
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <button className="nav-btn" onClick={() => setVistaActual('inicio')} style={estiloBtn(vistaActual === 'inicio')}>
              Inicio
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setVistaActual('catalogo')} style={estiloBtn(vistaActual === 'catalogo')}>
              Catálogo
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setVistaActual('carrito')} style={estiloBtn(vistaActual === 'carrito')}>
              Carrito ({cantidadCarrito})
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setVistaActual('ordenes')} style={estiloBtn(vistaActual === 'ordenes')}>
              Mis Órdenes
            </button>
          </li>
          <li>
            <button className="boton-primario" onClick={onAbrirLogin}>
              Ingresar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const estiloBtn = (activo) => ({
  background: 'none',
  border: 'none',
  color: activo ? '#fafafa' : '#C7D5E0',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem'
});

export default Navigation;