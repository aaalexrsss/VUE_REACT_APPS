<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  usuario: {
    type: Object,
    required: true,
  },
  esFavorito: {
    type: Boolean,
    required: true,
  },
})

const emitir = defineEmits(['favorito'])
</script>

<template>
  <article class="tarjeta">
    <h2>{{ usuario.name }}</h2>
    <p>Correo: {{ usuario.email }}</p>
    <p>Ciudad: {{ usuario.address.city }}</p>

    <button
      type="button"
      @click="emitir('favorito', usuario.id)"
    >
      {{ esFavorito ? 'Quitar favorito' : 'Favorito' }}
    </button>

    <RouterLink class="boton" :to="`/usuarios/${usuario.id}`">
      Ver detalle
    </RouterLink>
  </article>
</template>