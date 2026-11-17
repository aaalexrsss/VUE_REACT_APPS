import { Link } from 'react-router'

export default function TarjetaUsuario({
  usuario,
  esFavorito,
  alCambiarFavorito,
}) {
  return (
    <article className="tarjeta">
      <h2>{usuario.name}</h2>
      <p>Correo: {usuario.email}</p>
      <p>Ciudad: {usuario.address.city}</p>

      <button type="button" onClick={alCambiarFavorito}>
        {esFavorito ? 'Quitar favorito' : 'Favorito'}
      </button>

      <Link className="boton" to={`/usuarios/${usuario.id}`}>
        Ver detalle
      </Link>
    </article>
  )
}