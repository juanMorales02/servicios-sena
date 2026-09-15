<template>
  <ServiceLayout
    title="Coordinación académica"
    description="La coordinación académica apoya las novedades de los aprendices: retiros, deserción, traslados y aplazamientos en la formación titulada del SENA. También gestiona la programación de instructores y la logística de los ambientes de formación, verificando que se encuentren en óptimas condiciones para el desarrollo de las clases."
    :banner="fachada"
    :features="features"
    :schedule="schedule"
    :photo="foto"
    responsible-name="Luis Carlos Reina Sánchez"
    responsible-role="Coordinador académico"
    email="lreinas@sena.edu.com"
  />
</template>

<script setup>
import fachada from '../assets/images/coordinacion-fachada.jpeg'
import foto from '../assets/images/coordinacion-encargado.jpeg'
import ServiceLayout from '../components/ServiceLayout.vue'

const features = [
  { icon: 'how_to_reg', label: 'Novedades de aprendices' },
  { icon: 'event_busy', label: 'Aplazamientos y traslados' },
  { icon: 'groups', label: 'Programación de instructores' },
  { icon: 'meeting_room', label: 'Logística de ambientes' },
]

const schedule = [
  { day: 'Lunes a viernes', times: ['7:30 a.m. - 12:00 p.m.'] },
]
</script>
