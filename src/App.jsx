import { useState } from 'react';
import Navigation from './components/Navigation';
import GameCard from './components/GameCard';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

const juegosIniciales = [
  { id: 1, titulo: 'Teclado Gamer Mecanico Reptilex Rx0004', precio: 29990, plataforma: 'PC', imagen: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_-SYonnnG9orR-Kclx7CCLAaY6-qRiyN0dl2h88geYdW81EoHXnkNmb5EslW2QXnx_kY5oWAWR_lKP10xzMxD3O8q7xqcsds6leZqypNY5Orbe_lJECPoTw' },
  { id: 2, titulo: 'Space Odyssey', precio: 19990, plataforma: 'PS5', imagen: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80' },
  { id: 3, titulo: 'Mystic Quest', precio: 34990, plataforma: 'Xbox', imagen: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80' },
  { id: 4, titulo: 'Speed Racing Ultimate', precio: 14990, plataforma: 'PC', imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' }
];

function App() {
  const [carrito, setCarrito] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [vistaActual, setVistaActual] = useState('catalogo');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const agregarAlCarrito = (juego) => {
    setCarrito([...carrito, juego]);
  };

  const eliminarDelCarrito = (indexAEliminar) => {
    setCarrito(carrito.filter((_, idx) => idx !== indexAEliminar));
  };

  const realizarCompra = () => {
    if (carrito.length === 0) return;
    const nuevaOrden = {
      id: crypto.randomUUID().slice(0, 8),
      fecha: new Date().toLocaleDateString('es-CL'),
      items: carrito,
      total: carrito.reduce((acc, item) => acc + item.precio, 0)
    };
    setOrdenes([...ordenes, nuevaOrden]);
    setCarrito([]);
    alert('¡Compra realizada con éxito!');
    setVistaActual('ordenes');
  };

  return (
    <div className="app-container">
      <Navigation 
        vistaActual={vistaActual} 
        setVistaActual={setVistaActual} 
        cantidadCarrito={carrito.length}
        onAbrirLogin={() => setIsLoginOpen(true)}
      />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {usuario && (
          <p style={{ marginBottom: '1.5rem', color: 'var(--color-acento)' }}>
            Bienvenido de nuevo, <strong>{usuario}</strong> y ¡Feliz Halloween!
          </p>
        )}

        {vistaActual === 'inicio' && (
          <section className="banner-hero">
            <h2>Bienvenido a GameHub Store 🎃</h2>
            <p style={{ color: 'var(--texto-mutado)', marginBottom: '1.5rem' }}>
              Descubre las ofertas mas espeluznantes para PC, PS5 y Xbox.
            </p>
            <button className="boton-primario" onClick={() => setVistaActual('catalogo')}>
              Explorar Catálogo 🦇
            </button>
          </section>
        )}

        {vistaActual === 'catalogo' && (
          <section>
            <h2>Catálogo Destacado ⚰️</h2>
            <div className="grid-productos">
              {juegosIniciales.map((juego) => (
                <GameCard key={juego.id} juego={juego} onAgregarCarrito={agregarAlCarrito} />
              ))}
            </div>
          </section>
        )}

        {vistaActual === 'carrito' && (
          <section style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>Tu Carrito de Compras 🛒</h2>
            <br />
            {carrito.length === 0 ? (
              <p style={{ color: 'var(--texto-mutado)' }}>El carrito está vacío por el momento.</p>
            ) : (
              <div>
                {carrito.map((item, idx) => (
                  <div key={idx} className="item-carrito">
                    <div>
                      <strong>{item.titulo}</strong>
                      <div style={{ fontSize: '0.85rem', color: 'var(--texto-mutado)' }}>{item.plataforma}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontWeight: 'bold', color: 'var(--color-acento)' }}>
                        ${item.precio.toLocaleString('es-CL')}
                      </span>
                      <button className="boton-peligro" onClick={() => eliminarDelCarrito(idx)}>
                        Quitar
                      </button>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-card)', paddingTop: '1rem' }}>
                  <h3>Total: <span style={{ color: 'var(--color-acento)' }}>${carrito.reduce((acc, i) => acc + i.precio, 0).toLocaleString('es-CL')}</span></h3>
                  <br />
                  <button className="boton-primario" onClick={realizarCompra}>
                    Confirmar Compra
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {vistaActual === 'ordenes' && (
          <section style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>Mis Órdenes de Compra 📦</h2>
            <br />
            {ordenes.length === 0 ? (
              <p style={{ color: 'var(--texto-mutado)' }}>Aún no has registrado ninguna compra.</p>
            ) : (
              ordenes.map((orden) => (
                <div key={orden.id} className="item-carrito" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <h3>Orden #{orden.id}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--texto-mutado)' }}>Fecha: {orden.fecha}</p>
                  <p><strong>Total pagado: <span style={{ color: 'var(--color-acento)' }}>${orden.total.toLocaleString('es-CL')}</span></strong></p>
                </div>
              ))
            )}
          </section>
        )}
      </main>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={(email) => setUsuario(email)} 
      />

      <Footer />
    </div>
  );
}

export default App;