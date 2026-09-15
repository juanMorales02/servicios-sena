<template>
  <ServiceLayout
    title="Cafetería"
    description="La cafetería del centro presta el servicio de venta y atención al cliente en alimentación para aprendices, instructores y funcionarios. Cuenta con turnos de atención distribuidos durante el día y los sábados, garantizando opciones de comida en las principales franjas horarias de la jornada."
    :banner="fachada"
    :features="features"
    :schedule="schedule"
    :photo="foto"
    responsible-name="Encargada de cafetería"
    responsible-role="Coordinadora de cafetería"
    email="lcarreno@sena.edu.com"
    phone="+57 322 303 8451"
    phone-href="+573223038451"
    phone-note="Atención de cafetería"
  />
</template>

<script setup>
import fachada from '../assets/images/cafeteria-fachada.jpeg'
import foto from '../assets/images/cafeteria-encargada.jpeg'
import ServiceLayout from '../components/ServiceLayout.vue'

const features = [
  { icon: 'free_breakfast', label: 'Desayuno' },
  { icon: 'lunch_dining', label: 'Almuerzo' },
  { icon: 'dinner_dining', label: 'Cena' },
  { icon: 'event_available', label: 'Atención los sábados' },
]

const schedule = [
  { day: 'Lunes a viernes', times: ['7:00 a.m. - 12:00 p.m.', '1:00 p.m. - 5:30 p.m.', '7:00 p.m. - 9:30 p.m.'] },
  { day: 'Sábados', times: ['7:30 a.m. - 12:00 p.m.'] },
]
</script>
