import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import { obtenerUsuarios } from './servicios/apiUsuarios'
import ListaUsuarios from './vistas/ListaUsuarios'
import DetalleUsuario from './vistas/DetalleUsuario'

function PaginaNoEncontrada() {
  return (
    <section>
      <p>No se encontró esa página.</p>
      <Link to="/">Volver a la lista</Link>
    </section>
  )
}

export default function App() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    async function cargarUsuarios() {
      try {
        const datos = await obtenerUsuarios()
        setUsuarios(datos)
      } catch {
        setError('No se pudieron cargar los usuarios. Revisa tu conexión.')
      } finally {
        setCargando(false)
      }
    }

    cargarUsuarios()
  }, [])

  function cambiarFavorito(id) {
    setFavoritos((favoritosAnteriores) => {
      if (favoritosAnteriores.includes(id)) {
        return favoritosAnteriores.filter(
          (idFavorito) => idFavorito !== id
        )
      }

      return [...favoritosAnteriores, id]
    })
  }

  return (
    <BrowserRouter>
      <header className="barra-superior">
        <Link className="marca" to="/">Gestor de usuarios</Link>
        <span>Favoritos: {favoritos.length}</span>
      </header>

      <main className="contenedor">
        {cargando ? (
          <p>Cargando…</p>
        ) : error ? (
          <p role="alert">{error}</p>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ListaUsuarios
                  usuarios={usuarios}
                  favoritos={favoritos}
                  alCambiarFavorito={cambiarFavorito}
                />
              }
            />

            <Route
              path="/usuarios/:id"
              element={<DetalleUsuario usuarios={usuarios} />}
            />

            <Route path="*" element={<PaginaNoEncontrada />} />
          </Routes>
        )}
      </main>
    </BrowserRouter>
  )
}