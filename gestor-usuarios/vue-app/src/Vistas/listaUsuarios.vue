<script setup>
import { computed, ref } from 'vue'
import TarjetaUsuario from '../Componentes/TarjetaUsuario.vue'
import { filtrarUsuarios } from '../Funciones/filtrarUsuarios'
import { useUsuariosStore } from '../stores/usuarios'

const store = useUsuariosStore()
const busqueda = ref('')

const usuariosVisibles = computed(() =>
  filtrarUsuarios(store.usuarios, busqueda.value)
)
</script>

<template>
  <section>
    <h1>Usuarios</h1>

    <p v-if="store.cargando">Cargando…</p>

    <div v-else-if="store.error" role="alert">
      <p>{{ store.error }}</p>
      <button type="button" @click="store.cargarUsuarios()">
        Reintentar
      </button>
    </div>

    <template v-else>
      <label for="busqueda">Buscar por nombre</label>
      <input
        id="busqueda"
        v-model="busqueda"
        type="search"
        placeholder="Escribe un nombre"
      />

      <p v-if="usuariosVisibles.length === 0">
        No se encontraron usuarios.
      </p>

      <div v-else class="tarjetas">
        <TarjetaUsuario
          v-for="usuario in usuariosVisibles"
          :key="usuario.id"
          :usuario="usuario"
          :es-favorito="store.idsFavoritos.includes(usuario.id)"
          @favorito="store.cambiarFavorito($event)"
        />
      </div>
    </template>
  </section>
</template>