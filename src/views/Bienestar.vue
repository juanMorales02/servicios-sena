<template>
  <ServiceLayout
    title="Bienestar al aprendiz"
    description="Bienestar al aprendiz es una estrategia institucional para contribuir en la permanencia de los aprendices en su proceso formativo. Gestiona temas de salud física y mental, fortalecimiento de habilidades blandas y para la vida, deporte y aprovechamiento del tiempo libre, expresiones artísticas, apoyos socioeconómicos (sostenimiento, FIC, medios tecnológicos, alimentación y transporte), monitorías y liderazgo."
    :banner="fachada"
    :features="features"
    :schedule="schedule"
    :photo="foto"
    responsible-name="María Delea Arenas Mejía"
    responsible-role="Líder de Bienestar al Aprendiz"
    email="mdarenas@sena.edu.com"
    phone="+57 317 637 7670"
    phone-href="+573176377670"
    phone-note="Atención de Bienestar al Aprendiz"
  />
</template>

<script setup>
import fachada from '../assets/images/bienestar-fachada.jpeg'
import foto from '../assets/images/bienestar-encargada.jpeg'
import ServiceLayout from '../components/ServiceLayout.vue'

const features = [
  { icon: 'favorite', label: 'Salud física y mental' },
  { icon: 'savings', label: 'Apoyos socioeconómicos' },
  { icon: 'sports_soccer', label: 'Deporte y tiempo libre' },
  { icon: 'groups', label: 'Monitorías y liderazgo' },
]

const schedule = [
  { day: 'Lunes a viernes', times: ['7:30 a.m. - 12:00 p.m.', '2:00 p.m. - 6:00 p.m.'] },
]
</script>
