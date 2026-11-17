import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { obtenerUsuarios } from '../Servicios/apiUsuarios'

export const useUsuariosStore = defineStore('usuarios', () => {
  const usuarios = ref([])
  const cargando = ref(false)
  const error = ref('')
  const idsFavoritos = ref([])

  const cantidadFavoritos = computed(() => idsFavoritos.value.length)

  async function cargarUsuarios() {
    cargando.value = true
    error.value = ''

    try {
      usuarios.value = await obtenerUsuarios()
    } catch {
      error.value = 'No se pudieron cargar los usuarios. Revisa tu conexión.'
    } finally {
      cargando.value = false
    }
  }

  function cambiarFavorito(id) {
    if (idsFavoritos.value.includes(id)) {
      idsFavoritos.value = idsFavoritos.value.filter(
        (idFavorito) => idFavorito !== id
      )
    } else {
      idsFavoritos.value.push(id)
    }
  }

  return {
    usuarios,
    cargando,
    error,
    idsFavoritos,
    cantidadFavoritos,
    cargarUsuarios,
    cambiarFavorito,
  }
})