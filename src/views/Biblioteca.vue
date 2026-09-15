<template>
  <ServiceLayout
    title="Biblioteca"
    description="La biblioteca ofrece consultas en sala, préstamos a domicilio y préstamo interbibliotecario (PIP), además de talleres de lectura, capacitaciones y acceso a TIC. El equipo brinda asesorías en búsqueda de información y en el uso adecuado del catálogo bibliográfico para apoyar el proceso formativo de los aprendices."
    :banner="fachada"
    :features="features"
    :schedule="schedule"
    :photo="foto"
    responsible-name="Yudith Milagros Martínez Bautista"
    responsible-role="Bibliotecaria"
    email="ymmartinez@sena.edu.co"
    phone="+57 312 584 8032"
    phone-href="+573125848032"
    phone-note="Atención de biblioteca"
  />
</template>

<script setup>
import fachada from '../assets/images/biblioteca-fachada.jpg'
import foto from '../assets/images/biblioteca-encargada.jpeg'
import ServiceLayout from '../components/ServiceLayout.vue'

const features = [
  { icon: 'menu_book', label: 'Consulta en sala' },
  { icon: 'local_shipping', label: 'Préstamo a domicilio' },
  { icon: 'swap_horiz', label: 'Préstamo interbibliotecario' },
  { icon: 'computer', label: 'Acceso a TIC' },
]

const schedule = [
  { day: 'Lunes a viernes', times: ['7:00 a.m. - 10:00 a.m.'] },
]
</script>
