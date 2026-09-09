<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="eco" />
          </q-avatar>
          Centro Agroturístico Regional Santander
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item-label header>Servicios</q-item-label>

        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/enfermeria">
          <q-item-section avatar>
            <q-icon name="medical_services" />
          </q-item-section>
          <q-item-section>Enfermería</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/bienestar">
          <q-item-section avatar>
            <q-icon name="spa" />
          </q-item-section>
          <q-item-section>Bienestar</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/biblioteca">
          <q-item-section avatar>
            <q-icon name="menu_book" />
          </q-item-section>
          <q-item-section>Biblioteca</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/cafeteria">
          <q-item-section avatar>
            <q-icon name="restaurant" />
          </q-item-section>
          <q-item-section>Cafetería</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/coordinacion">
          <q-item-section avatar>
            <q-icon name="badge" />
          </q-item-section>
          <q-item-section>Coordinación</q-item-section>
        </q-item>

        <q-separator />

        <q-item to="/acerca">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>Acerca de</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-9 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-caption text-center">
          Centro Agroturístico Regional Santander · SENA
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
