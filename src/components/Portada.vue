<template>
    <div class="imagen-portada">
      <Navbar></Navbar>
      <div class="logo">
        <img src="@/assets/logo.png" alt="CustomCake Logo">
        <p class="texto-logo">CustomCakes</p>
        <p class="slogan">Tu pastel como quieras</p>
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Portada',
    components: {
      Navbar
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.imagen-portada {
  background-image: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('@/assets/portada.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  text-align: center;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
}
.texto-logo {
  font-family: 'Pacifico', cursive;
  color: #fff;
  font-size: 150px;
}
.imagen-portada img {
  height: 200px;
}

.slogan {
  color: #fff;
  font-weight: lighter;
  font-size: 40px;
}

@media (max-width: 600px) {
  .imagen-portada {
    height: 600px;
  }
  .texto-logo{
    font-size: 50px;
  }
}


</style>