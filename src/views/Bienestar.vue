<template>
  <q-page class="page">
    <div class="container">

      <q-img :src="fachada" :ratio="21/9" class="banner">
        <div class="banner-label">Bienestar al aprendiz</div>
      </q-img>

      <h1 class="titulo">Bienestar al aprendiz</h1>

      <p class="descripcion">
        Bienestar al aprendiz es una estrategia institucional para
        contribuir en la permanencia de los aprendices en su proceso
        formativo. Gestiona temas de salud física y mental, fortalecimiento
        de habilidades blandas y para la vida, deporte y aprovechamiento
        del tiempo libre, expresiones artísticas, apoyos socioeconómicos
        (sostenimiento, FIC, medios tecnológicos, alimentación y
        transporte), monitorías y liderazgo.
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
            <q-item>
              <q-item-section>Lunes a viernes</q-item-section>
              <q-item-section side>2:00 p.m. - 6:00 p.m.</q-item-section>
            </q-item>
          </q-list>
        </q-card>

        <q-card flat bordered class="card card-contacto">
          <q-card-section>
            <div class="card-title">
              <q-icon name="call" color="primary" />
              <span>Contacto</span>
            </div>
            <div class="telefono">+57 317 637 7670</div>

    
            <div class="q-gutter-sm acciones">
              <q-btn color="primary" icon="call" label="Llamar" href="tel:+573176377670" />
              <q-btn color="primary" outline icon="mail" label="Enviar correo" href="mailto:mdarenas@sena.edu.com" />
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
              <div class="encargado-nombre">María Delea Arenas Mejía</div>
              <div class="encargado-cargo">Líder de Bienestar al Aprendiz</div>
              <div class="encargado-correo">
                <q-icon name="mail" size="16px" />mdarenas@sena.edu.com
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
import fachada from '../assets/images/bienestar-fachada.jpeg'
import foto from '../assets/images/bienestar-encargada.jpeg'
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
