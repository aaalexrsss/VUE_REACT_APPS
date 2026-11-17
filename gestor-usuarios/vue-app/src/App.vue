<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useUsuariosStore } from './stores/usuarios'

const store = useUsuariosStore()

onMounted(() => {
  store.cargarUsuarios()
})
</script>

<template>
  <header class="barra-superior">
    <RouterLink class="marca" to="/">Gestor de usuarios</RouterLink>
    <span>Favoritos: {{ store.cantidadFavoritos }}</span>
  </header>

  <main class="contenedor">
    <RouterView />
  </main>
</template>