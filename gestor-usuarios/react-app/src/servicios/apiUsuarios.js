const URL_USUARIOS = 'https://jsonplaceholder.typicode.com/users'

export async function obtenerUsuarios() {
  const respuesta = await fetch(URL_USUARIOS)

  if (!respuesta.ok) {
    throw new Error('La respuesta de la API no fue correcta')
  }

  return respuesta.json()
}