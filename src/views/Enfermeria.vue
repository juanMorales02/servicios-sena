<template>
  <ServiceLayout
    title="Enfermería"
    description="Aquí se ofrecen los servicios de promoción y prevención de enfermedades, así como atención básica en primeros auxilios para los aprendices e instructores del centro. El equipo de enfermería acompaña situaciones de salud que se presenten durante la jornada formativa y orienta sobre el manejo de urgencias menores dentro de las instalaciones."
    :banner="fachada"
    :features="features"
    :schedule="schedule"
    :photo="foto"
    responsible-name="María Fernanda Gómez Reyes"
    responsible-role="Enfermera"
    email="Mafecita1118@gmail.com"
    phone="+57 321 415 3995"
    phone-href="+573214153995"
    phone-note="Atención de enfermería"
  />
</template>

<script setup>
import fachada from '../assets/images/enfermeria-fachada.jpg'
import foto from '../assets/images/enfermeria-encargada.jpeg'
import ServiceLayout from '../components/ServiceLayout.vue'

const features = [
  { icon: 'health_and_safety', label: 'Promoción y prevención' },
  { icon: 'medical_services', label: 'Primeros auxilios' },
  { icon: 'emergency', label: 'Urgencias menores' },
  { icon: 'support', label: 'Acompañamiento en salud' },
]

const schedule = [
  { day: 'Lunes a viernes', times: ['6:30 a.m. - 10:30 a.m.', '4:00 p.m. - 8:00 p.m.'] },
]
</script>
