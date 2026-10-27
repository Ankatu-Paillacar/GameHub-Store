import React from 'react';

function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {anio} GameHub Store. Todos los derechos reservados.</p>
        <p>Creado, Diseñado y Transformado a React 19 por:
        <p>Ankatu Paillacar Meza</p>
        <p>Martiz Aravena Martin Brendan</p>
        <p>Jorquera Mancilla Brayan Sebastian</p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
