import Home from "../views/Home.vue"
import Enfermeria from "../views/Enfermeria.vue"
import Bienestar from "../views/Bienestar.vue"
import Biblioteca from "../views/Biblioteca.vue"
import Cafeteria from "../views/Cafeteria.vue"
import Coordinacion from "../views/Coordinacion.vue"
import Acerca from "../views/Acerca.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Home, name: "home" },
    { path: "/enfermeria", component: Enfermeria, name: "enfermeria" },
    { path: "/bienestar", component: Bienestar, name: "bienestar" },
    { path: "/biblioteca", component: Biblioteca, name: "biblioteca" },
    { path: "/cafeteria", component: Cafeteria, name: "cafeteria" },
    { path: "/coordinacion", component: Coordinacion, name: "coordinacion" },
    { path: "/acerca", component: Acerca, name: "acerca" }
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})
