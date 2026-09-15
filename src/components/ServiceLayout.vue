<template>
  <q-page class="page">
    <div class="container">

      <h1 class="titulo">{{ title }}</h1>
      <p class="descripcion">{{ description }}</p>

      <q-img :src="banner" :ratio="21 / 9" class="banner" />

      <div class="grid">
        <!-- Columna izquierda -->
        <div class="col-izq">

          <q-card flat class="card">
            <q-card-section>
              <div class="section-header">
                <div class="icon-badge">
                  <q-icon name="menu_book" size="20px" />
                </div>
                <span class="eyebrow eyebrow-verde">Misión del servicio</span>
              </div>
              <div class="section-titulo">¿Qué ofrecemos a la comunidad educativa?</div>
              <p class="parrafo">{{ offerDescription || description }}</p>

              <div class="features" v-if="features && features.length">
                <div class="feature-box" v-for="(f, i) in features" :key="i">
                  <q-icon :name="f.icon" color="primary" size="20px" />
                  <span>{{ f.label }}</span>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <q-card flat class="card">
            <q-card-section>
              <div class="horario-header">
                <div class="section-header no-margin">
                  <div class="icon-badge">
                    <q-icon name="schedule" size="20px" />
                  </div>
                  <span class="section-titulo-inline">Horarios de atención</span>
                </div>
                <span class="pill pill-neutral">Zona horaria Bogotá (UTC-5)</span>
              </div>

              <div class="tabla">
                <div class="tabla-head">
                  <span>Días de la semana</span>
                  <span>Horario</span>
                  <span>Modalidad</span>
                </div>
                <div class="tabla-row" v-for="(row, i) in schedule" :key="i">
                  <span class="dia"><span class="dot" /> {{ row.day }}</span>
                  <span class="horas">
                    <span v-for="(t, j) in row.times" :key="j" class="hora-linea">{{ t }}</span>
                  </span>
                  <span class="pill pill-verde">Atención presencial</span>
                </div>
              </div>
              <p class="nota">
                Fuera de este horario puedes escribir al correo o comunicarte a la línea de contacto.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Columna derecha -->
        <div class="col-der">
          <q-card flat class="card card-responsable">
            <div class="responsable-header" />

            <div class="avatar-container">
              <q-avatar size="88px" class="avatar">
                <img :src="photo">
              </q-avatar>
              <div class="avatar-badge">
                <q-icon name="verified" size="16px" color="white" />
              </div>
            </div>

            <div class="responsable-info">
              <span class="pill pill-verde-suave">Funcionario responsable</span>
              <div class="responsable-nombre">{{ responsibleName }}</div>
              <div class="responsable-cargo">{{ responsibleRole }}</div>
            </div>

            <q-separator class="separador" />

            <q-card-section class="responsable-body">
              <div class="dato" v-if="email">
                <q-icon name="mail" size="16px" color="primary" />
                <div>
                  <div class="dato-label">Correo institucional</div>
                  <div class="dato-valor">{{ email }}</div>
                </div>
              </div>
              <div class="dato" v-if="department">
                <q-icon name="apartment" size="16px" color="primary" />
                <div>
                  <div class="dato-label">Dependencia</div>
                  <div class="dato-valor">{{ department }}</div>
                </div>
              </div>
              <q-btn
                class="full-width btn-mensaje"
                color="primary"
                unelevated
                icon="send"
                label="Enviar mensaje directo"
                :href="`mailto:${email}`"
              />
            </q-card-section>
          </q-card>

          <q-card flat class="card" v-if="phone">
            <q-card-section>
              <div class="section-header">
                <div class="icon-badge">
                  <q-icon name="call" size="20px" />
                </div>
                <span class="section-titulo-inline">Línea telefónica</span>
              </div>
              <div class="telefono-box">
                <q-icon name="phone_in_talk" color="primary" size="18px" />
                <div>
                  <div class="telefono-numero">{{ phone }}</div>
                  <div class="telefono-nota">{{ phoneNote }}</div>
                </div>
              </div>
              <q-btn
                class="full-width"
                color="primary"
                outline
                icon="call"
                label="Llamar"
                :href="`tel:${phoneHref}`"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  banner: String,
  offerDescription: String,
  features: { type: Array, default: () => [] },
  schedule: { type: Array, default: () => [] },
  photo: String,
  responsibleName: String,
  responsibleRole: String,
  email: String,
  department: { type: String, default: 'Centro Agroturístico Regional Santander' },
  phone: String,
  phoneHref: String,
  phoneNote: { type: String, default: 'Atención directa del servicio' }
})
</script>

<style scoped>
.page {
  padding: 28px 24px 48px;
  background: #f7f6f3;
}
.container {
  max-width: 1080px;
  margin: 0 auto;
}
.titulo {
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 10px;
  color: #171717;
  letter-spacing: -0.01em;
}
.descripcion {
  font-size: 15.5px;
  color: #4b5563;
  margin: 0 0 24px;
  line-height: 1.7;
  max-width: 780px;
}
.banner {
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 28px;
}
.grid {
  display: grid;
  grid-template-columns: 1.75fr 1fr;
  gap: 24px;
  align-items: start;
}
.card {
  border-radius: 18px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.05);
}
.card :deep(.q-card__section) {
  padding: 28px;
}
.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.section-header.no-margin {
  margin-bottom: 0;
}
.icon-badge {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(57, 169, 0, 0.12);
  color: #2e8600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.eyebrow {
  display: inline-block;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
}
.eyebrow-verde {
  background: rgba(57, 169, 0, 0.14);
  color: #2e8600;
}
.section-titulo {
  font-size: 21px;
  font-weight: 700;
  color: #171717;
  margin-bottom: 14px;
}
.section-titulo-inline {
  font-size: 18px;
  font-weight: 700;
  color: #171717;
}
.parrafo {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.75;
  margin: 0 0 20px;
  text-align: justify;
}
.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.feature-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border: 1px solid #ececec;
  border-radius: 12px;
  padding: 14px 12px;
  font-size: 12.5px;
  font-weight: 600;
  color: #333;
  background: #fafafa;
}
.horario-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}
.pill {
  font-size: 11.5px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  white-space: nowrap;
}
.pill-neutral {
  background: rgba(57, 169, 0, 0.10);
  color: #2e8600;
}
.pill-verde {
  background: rgba(57, 169, 0, 0.14);
  color: #2e8600;
  justify-self: start;
}
.pill-verde-suave {
  background: #dcf5cf;
  color: #237000;
  margin-bottom: 8px;
}
.tabla-head {
  display: grid;
  grid-template-columns: 1.2fr 1.4fr 1fr;
  font-size: 11.5px;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0 0 10px;
  border-bottom: 1px solid #ececec;
}
.tabla-row {
  display: grid;
  grid-template-columns: 1.2fr 1.4fr 1fr;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 13.5px;
}
.tabla-row:last-child {
  border-bottom: none;
}
.dia {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #171717;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #39a900;
  flex-shrink: 0;
}
.horas {
  display: flex;
  flex-direction: column;
  color: #4b5563;
}
.nota {
  font-size: 12.5px;
  color: #9ca3af;
  margin: 16px 0 0;
}
.card-responsable {
  overflow: hidden;
  text-align: center;
}
.card-responsable :deep(.q-card__section) {
  padding: 24px;
  text-align: left;
}
.responsable-header {
  background: linear-gradient(155deg, #4cbf00, #1f7a00);
  height: 92px;
}
.avatar-container {
  position: relative;
  width: 88px;
  margin: -44px auto 0;
}
.avatar {
  border: 4px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
}
.avatar-badge {
  position: absolute;
  bottom: 0;
  right: -2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2e8600;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.responsable-info {
  text-align: center;
  padding: 10px 20px 4px;
}
.responsable-nombre {
  font-size: 16px;
  font-weight: 700;
  color: #171717;
}
.responsable-cargo {
  font-size: 13px;
  color: #6b7280;
  margin-top: 2px;
}
.separador {
  margin-top: 18px;
}
.responsable-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.dato {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.dato-label {
  font-size: 11px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
.dato-valor {
  font-size: 13.5px;
  color: #171717;
  font-weight: 500;
  word-break: break-word;
}
.btn-mensaje {
  margin-top: 4px;
  border-radius: 10px;
}
.telefono-box {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ececec;
  border-radius: 12px;
  padding: 14px;
  margin: 4px 0 14px;
  background: #fafafa;
}
.telefono-numero {
  font-size: 16px;
  font-weight: 700;
  color: #171717;
}
.telefono-nota {
  font-size: 12px;
  color: #9ca3af;
}
@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .tabla-head {
    display: none;
  }
  .tabla-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }
  .card :deep(.q-card__section) {
    padding: 20px;
  }
}
</style>
