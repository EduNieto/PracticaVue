<template>
  <div class="home">
    <Portada></Portada>
    <!--<Pasteles></Pasteles>-->
    <Formulario></Formulario>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Formulario from '@/components/Formulario.vue'
import Portada from '@/components/Portada.vue'
import Pasteles from '@/components/Pasteles.vue'

export default {
  name: 'HomeView',
  components: {
    Formulario,
    Portada,
    Footer,
    Pasteles
  }
}
</script>
