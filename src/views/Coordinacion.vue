<template>
  <q-page class="page">
    <div class="container">

      <q-img :src="fachada" :ratio="21/9" class="banner">
        <div class="banner-label">Coordinación académica</div>
      </q-img>

      <h1 class="titulo">Coordinación académica</h1>

      <p class="descripcion">
        La coordinación académica apoya las novedades de los aprendices:
        retiros, deserción, traslados y aplazamientos en la formación
        titulada del SENA. También gestiona la programación de
        instructores y la logística de los ambientes de formación,
        verificando que se encuentren en óptimas condiciones para el
        desarrollo de las clases.
      </p>

      <div class="info-row">
        <q-card flat bordered class="card card-horario">
          <q-card-section>
            <div class="card-title">
              <q-icon name="schedule" color="primary" />
              <span>Horarios de atención</span>
            </div>
          </q-card-section>
          <q-separator />
          <q-list separator>
            <q-item>
              <q-item-section>Lunes a viernes</q-item-section>
              <q-item-section side>7:30 a.m. - 12:00 p.m.</q-item-section>
            </q-item>
          </q-list>
        </q-card>

        <q-card flat bordered class="card card-contacto">
          <q-card-section>
            <div class="card-title">
              <q-icon name="call" color="primary" />
              <span>Contacto</span>
            </div>
            <div class="telefono telefono-na">No disponible</div>

          
            <div class="q-gutter-sm acciones">
              <q-btn color="primary" outline icon="mail" label="Enviar correo" href="mailto:lreinas@sena.edu.com" />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <q-card flat bordered class="card">
        <q-card-section>
          <div class="encargado-titulo">Encargado de atención al cliente</div>
          <div class="encargado-info">
            <q-avatar size="72px">
              <img :src="foto">
            </q-avatar>
            <div>
              <div class="encargado-nombre">Luis Carlos Reina Sánchez</div>
              <div class="encargado-cargo">Coordinador académico</div>
              <div class="encargado-correo">
                <q-icon name="mail" size="16px" />lreinas@sena.edu.com
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
import fachada from '../assets/images/coordinacion-fachada.jpeg'
import foto from '../assets/images/coordinacion-encargado.jpeg'
</script>

<style scoped>
.page {
  padding: 16px;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}
.banner {
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;
}
.banner-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 12px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
}
.titulo {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 4px;
}
.descripcion {
  font-size: 15px;
  color: #616161;
  margin: 0 0 24px;
  line-height: 1.6;
}
.info-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
.card {
  border-radius: 8px;
}
.card-horario {
  flex: 1.4 1 320px;
}
.card-contacto {
  flex: 1 1 240px;
}
.card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
}
.telefono {
  font-size: 19px;
  font-weight: 500;
  color: #1976d2;
  margin-top: 8px;
}
.telefono-na {
  color: #757575;
  font-size: 16px;
}
.acciones {
  margin-top: 16px;
}
.encargado-titulo {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 16px;
}
.encargado-info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.encargado-nombre {
  font-size: 15px;
  font-weight: 700;
}
.encargado-cargo {
  font-size: 14px;
  color: #616161;
}
.encargado-correo {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #1976d2;
}
@media (max-width: 600px) {
  .info-row {
    flex-direction: column;
  }
}
</style>
