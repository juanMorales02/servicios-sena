<template>
  <q-page class="page">
    <div class="contenido">
      <q-icon name="eco" size="64px" color="primary" />
      <h1 class="titulo">¡Bienvenido!</h1>
      <p class="texto">
        Consulta desde el menú lateral la información de los servicios del
        Centro Agroturístico Regional Santander: horarios de atención,
        teléfonos de contacto y el equipo encargado de cada área.
      </p>
    </div>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: 70vh;
}
.contenido {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}
.titulo {
  font-size: 26px;
  font-weight: 700;
  margin: 0;
}
.texto {
  font-size: 15px;
  color: #616161;
  max-width: 480px;
  margin: 0;
}
</style>
