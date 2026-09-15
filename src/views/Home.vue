<template>
  <q-page class="page">
    <div class="container">

      <!-- Hero -->
      <div class="hero">
        <div class="hero-texto">
            <br>
          <div class="badges">
            <span class="badge"><q-icon name="place" size="14px" /> Sede Regional Santander</span>
            <span class="badge"><q-icon name="bolt" size="14px" /> Tecnología e Innovación</span>
            <span class="badge"><q-icon name="badge" size="14px" /> Ficha ADSO 2870142</span>
          </div>

          <br>
          <h1 class="titulo">Conoce Nuestro Centro y el Talento Detrás del Portal</h1>

          <p class="descripcion">
                  El Centro Agroturístico Regional Santander (SENA) forma
            aprendices en programas relacionados con el sector agropecuario
            y turístico. Esta aplicación reúne en un solo lugar la
            información de los principales servicios de apoyo al aprendiz
            que ofrece el centro: enfermería, bienestar, biblioteca,
            cafetería y coordinación académica, con sus horarios,
            contactos y encargados de atención.
          </p>

         
        </div>

        <q-img :src="heroImg" class="hero-img"  />
      </div>

      <!-- Equipo -->
      <div class="equipo" id="equipo">
        <div class="equipo-header">
          <div>
  
            <h2 class="equipo-titulo">Equipo de Desarrollo de Software (ADSO)</h2>
          </div>
        
        </div>

        <div class="equipo-grid">
          <q-card flat class="miembro-card" v-for="(m, i) in equipo" :key="i">
            <q-card-section>
              <div class="miembro-header">
                <q-avatar :style="{ background: m.color }" class="miembro-avatar" text-color="white">
                  {{ m.iniciales }}
                </q-avatar>
                <div>
                  <div class="miembro-nombre">{{ m.nombre }}</div>
                  <div class="miembro-rol" :style="{ color: m.color }">{{ m.rol }}</div>
                </div>
              </div>
        
              <div class="miembro-tags">
                <span class="tag" v-for="(t, j) in m.tags" :key="j">{{ t }}</span>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import heroImg from '../assets/images/cafeteria-fachada.jpeg'

function irAlEquipo () {
  document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth' })
}

const equipo = [
  {
    iniciales: 'JM',
    nombre: 'Juan sebastian',
    rol: 'Líder Frontend & UI Architecture',
    color: '#2f6fed', 
    tags: ['Tailwind CSS', 'Vanilla JS', 'Diseño UI']
  }
]
</script>

<style scoped>
.page {
  padding: 28px 24px 56px;
  background: #f7f6f3;
}
.container {
  max-width: 1080px;
  margin: 0 auto;
}
.hero {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 48px;
}
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 700;
  color: #1c5200;
  background: rgba(47, 125, 0, 0.12);
  padding: 5px 12px;
  border-radius: 20px;
}
.titulo {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2;
  color: #171717;
  margin: 0 0 14px;
  letter-spacing: -0.01em;
}
.descripcion {
  font-size: 15.5px;
  color: #4b5563;
  line-height: 1.7;
  margin: 0 0 22px;
}
.btn-equipo {
  border-radius: 10px;
}
.hero-img {
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
.equipo-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
}
.pill-equipo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 700;
  color: #1c5200;
  background: #dcf5cf;
  padding: 5px 12px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.equipo-titulo {
  font-size: 24px;
  font-weight: 800;
  color: #171717;
  margin: 0;
}
.equipo-intro {
  font-size: 13.5px;
  color: #6b7280;
  line-height: 1.6;
  max-width: 360px;
  margin: 0;
  text-align: right;
}
.equipo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.miembro-card {
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 20px rgba(0, 0, 0, 0.05);
}
.miembro-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.miembro-avatar {
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}
.miembro-nombre {
  font-size: 14.5px;
  font-weight: 700;
  color: #171717;
}
.miembro-rol {
  font-size: 11.5px;
  font-weight: 600;
}
.miembro-desc {
  font-size: 12.5px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 14px;
}
.miembro-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 10.5px;
  font-weight: 600;
  color: #4b5563;
  background: #f0f0f0;
  padding: 4px 9px;
  border-radius: 8px;
}
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .hero-img {
    order: -1;
  }
  .equipo-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .equipo-intro {
    text-align: left;
    max-width: none;
  }
  .equipo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .equipo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
