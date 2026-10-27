import React from 'react';

function GameCard({ juego, onAgregarCarrito }) {
  const { titulo, precio, plataforma, imagen } = juego;

  return (
    <article className="tarjeta-producto">
      <img src={imagen} alt={titulo} />
      <div className="game-info">
        <span className="platform-badge">{plataforma}</span>
        <h3>{titulo}</h3>
        <p className="price">${precio.toLocaleString('es-CL')}</p>
        <button className="boton-primario" onClick={() => onAgregarCarrito(juego)}>
          Agregar al Carrito 👻
        </button>
      </div>
    </article>
  );
}

export default GameCard;