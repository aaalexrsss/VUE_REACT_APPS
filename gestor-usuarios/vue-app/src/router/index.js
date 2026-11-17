import { createRouter, createWebHistory } from 'vue-router'
import ListaUsuarios from '../Vistas/listaUsuarios.vue'
import DetalleUsuario from '../Vistas/detalleUsuario.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ListaUsuarios },
    { path: '/usuarios/:id', component: DetalleUsuario },
  ],
})

export default router