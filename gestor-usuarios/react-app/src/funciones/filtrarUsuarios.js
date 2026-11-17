export function filtrarUsuarios(usuarios, busqueda) {
  const texto = busqueda.trim().toLowerCase()

  return usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(texto)
  )
}