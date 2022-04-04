<template>
    <div>
        <Navbar></Navbar>
        <GridPedidos></GridPedidos>
    </div>
</template>
<script>
import GridPedidos from '@/components/GridPedidos.vue'
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'PedidosView',
    components: {
        GridPedidos,
        Navbar
    }
}
</script>

<style scoped>
.Navbar >>> li a{
    color: #000
}
</style>