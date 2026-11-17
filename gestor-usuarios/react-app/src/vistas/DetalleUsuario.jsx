import { Link, useParams } from 'react-router'

export default function DetalleUsuario({ usuarios }) {
  const { id } = useParams()

  const usuario = usuarios.find(
    (elemento) => String(elemento.id) === id
  )

  if (!usuario) {
    return (
      <section>
        <p>No se encontró ese usuario.</p>
        <Link to="/">Volver a la lista</Link>
      </section>
    )
  }

  return (
    <article className="tarjeta">
      <h1>{usuario.name}</h1>
      <p>Correo: {usuario.email}</p>
      <p>Ciudad: {usuario.address.city}</p>

      <Link className="boton" to="/">
        Volver a la lista
      </Link>
    </article>
  )
}