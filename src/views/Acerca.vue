<template>
  <q-page class="page">
    <div class="container">

      <h1 class="titulo">Acerca de</h1>

      <q-card flat bordered class="card">
        <q-card-section>
          <div class="card-title">Sobre el centro</div>
          <p class="texto">
            El Centro Agroturístico Regional Santander (SENA) forma
            aprendices en programas relacionados con el sector agropecuario
            y turístico. Esta aplicación reúne en un solo lugar la
            información de los principales servicios de apoyo al aprendiz
            que ofrece el centro: enfermería, bienestar, biblioteca,
            cafetería y coordinación académica, con sus horarios,
            contactos y encargados de atención.
          </p>
        </q-card-section>
      </q-card>

      <q-card flat bordered class="card">
        <q-card-section>
          <div class="card-title">Equipo desarrollador</div>
          <q-list separator>
            <q-item >
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">     
                  {{ equipo.iniciales }}             
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ equipo.nombre }}</q-item-label>
                <q-item-label caption>{{ equipo.rol }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const equipo = ref({ nombre: 'Sebastián Morales', rol: 'Desarrollo frontend', iniciales: 'S'})
</script>

<style scoped>
.page {
  padding: 16px;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}
.titulo {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 16px;
}
.card {
  border-radius: 8px;
  margin-bottom: 16px;
}
.card-title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
}
.texto {
  font-size: 15px;
  color: #616161;
  line-height: 1.6;
  margin: 0;
}
</style>
