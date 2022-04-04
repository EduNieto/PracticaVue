<template>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">e-mail</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Sabor</th>
                <th scope="col">Betún</th>
                <th scope="col">Toppings</th>
                <th scope="col">Tamaño</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in pedido" :key="item">
                <td>{{item.id}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.apellido}}</td>
                <td>{{item.email}}</td>
                <td>{{item.tel}}</td>
                <td>{{item.sabor.desc}}</td>
                <td>{{item.betun.desc}}</td>
                <td><span v-for="topping in item.toppings" :key="topping">{{topping.desc}}, </span></td>
                <td><span v-for="tam in item.tamanio" :key="tam" >{{tam}}</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'GridPedidos',
    computed: {
        ...mapState(['pedido'])
    }
}
</script>