<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUsuariosStore } from '../stores/usuarios'

const ruta = useRoute()
const store = useUsuariosStore()

const usuario = computed(() =>
  store.usuarios.find(
    (item) => String(item.id) === String(ruta.params.id)
  )
)
</script>

<template>
  <section>
    <p v-if="store.cargando">Cargando…</p>

    <div v-else-if="store.error" role="alert">
      <p>{{ store.error }}</p>
      <button type="button" @click="store.cargarUsuarios()">
        Reintentar
      </button>
    </div>

    <article v-else-if="usuario" class="tarjeta">
      <h1>{{ usuario.name }}</h1>
      <p>Correo: {{ usuario.email }}</p>
      <p>Ciudad: {{ usuario.address.city }}</p>

      <RouterLink class="boton" to="/">
        Volver a la lista
      </RouterLink>
    </article>

    <div v-else>
      <p>No se encontró ese usuario.</p>
      <RouterLink to="/">Volver a la lista</RouterLink>
    </div>
  </section>
</template>