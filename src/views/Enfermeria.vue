<template>
  <q-page class="page">
    <div class="container">

      <q-img :src="fachada" :ratio="21/9" class="banner">
        <div class="banner-label">Enfermería</div>
      </q-img>

      <h1 class="titulo">Enfermería</h1>

      <p class="descripcion">
        Aquí se ofrecen los servicios de promoción y prevención de
        enfermedades, así como atención básica en primeros auxilios para
        los aprendices e instructores del centro. El equipo de enfermería
        acompaña situaciones de salud que se presenten durante la jornada
        formativa y orienta sobre el manejo de urgencias menores dentro de
        las instalaciones.
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
              <q-item-section side>6:30 a.m. - 10:30 a.m.</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Lunes a viernes</q-item-section>
              <q-item-section side>4:00 p.m. - 8:00 p.m.</q-item-section>
            </q-item>
          </q-list>
        </q-card>

        <q-card flat bordered class="card card-contacto">
          <q-card-section>
            <div class="card-title">
              <q-icon name="call" color="primary" />
              <span>Contacto</span>
            </div>
            <div class="telefono">+57 321 415 3995</div>

          
            <div class="q-gutter-sm acciones">
              <q-btn color="primary" icon="call" label="Llamar" href="tel:+573214153995" />
              <q-btn color="primary" outline icon="mail" label="Enviar correo" href="mailto:Mafecita1118@gmail.com" />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <q-card flat bordered class="card">
        <q-card-section>
          <div class="encargado-titulo">Encargada de atención al cliente</div>
          <div class="encargado-info">
            <q-avatar size="72px">
              <img :src="foto">
            </q-avatar>
            <div>
              <div class="encargado-nombre">María Fernanda Gómez Reyes</div>
              <div class="encargado-cargo">Enfermera</div>
              <div class="encargado-correo">
                <q-icon name="mail" size="16px" />Mafecita1118@gmail.com
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
import fachada from '../assets/images/enfermeria-fachada.jpeg'
import foto from '../assets/images/enfermeria-encargada.jpeg'
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
