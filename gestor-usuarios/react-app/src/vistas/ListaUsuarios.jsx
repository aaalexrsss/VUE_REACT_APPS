import { useState } from 'react'
import TarjetaUsuario from '../componentes/TarjetaUsuario'
import { filtrarUsuarios } from '../funciones/filtrarUsuarios'

export default function ListaUsuarios({
  usuarios,
  favoritos,
  alCambiarFavorito,
}) {
  const [busqueda, setBusqueda] = useState('')

  const usuariosVisibles = filtrarUsuarios(usuarios, busqueda)

  return (
    <section>
      <h1>Usuarios</h1>

      <label htmlFor="busqueda">Buscar por nombre</label>
      <input
        id="busqueda"
        type="search"
        placeholder="Escribe un nombre"
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      {usuariosVisibles.length === 0 ? (
        <p>No se encontraron usuarios.</p>
      ) : (
        <div className="tarjetas">
          {usuariosVisibles.map((usuario) => (
            <TarjetaUsuario
              key={usuario.id}
              usuario={usuario}
              esFavorito={favoritos.includes(usuario.id)}
              alCambiarFavorito={() => alCambiarFavorito(usuario.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}