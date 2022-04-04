<template>
    <div class="container-sm">
        <h1 class="mt-4 mb-4 text-center">Crea tu pastel personalizado</h1>
        <p class="text-center">Elige el sabor del pan, betún y toppings de tu pastel</p>
        <div class="form-container">
            <div class="form-group">
                <label for="selSabor">Selecciona el sabor del pan:</label>
                <select v-model="$store.state.saborSeleccionado" id="selSabor" class="form-select mt-1">
                    <option v-for="sabor in sabores" v-bind:key="sabor" v-bind:value="{id: sabor.id, desc: sabor.desc}">{{sabor.desc}}</option>
                </select>

                <label for="selBetun">Selecciona el tipo de betún</label>
                <select v-model="$store.state.betunSeleccionado" id="selBetun" class="form-select mt-1">
                    <option v-for="betun in betunes" :key="betun" :value="{id: betun.id, desc: betun.desc}">{{betun.desc}}</option>
                </select>

                <p class="mt-4">Selecciona los toppings de tu pastel</p>
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col">
                            <label class="checks" v-for="topping in toppings.slice(0, 6)" :key="topping">
                                <input v-model="$store.state.toppingSeleccionado" type="checkbox" :value="{id: topping.id, desc: topping.desc}"> {{topping.desc}}
                            </label>
                        </div>
                        <div class="col">
                            <label class="checks" v-for="topping in toppings.slice(6, 12)" :key="topping">
                                <input v-model="$store.state.toppingSeleccionado" type="checkbox" :value="{id: topping.id, desc: topping.desc}"> {{topping.desc}}
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="option-form">
                    <p class="mt-4">Selecciona el tamaño de tu pastel</p>
                    <label v-for="tamanio in tamanios" :key="tamanio" class="radio-inline">
                        <input v-model="$store.state.tamanioSeleccionado" type="radio" :value="{id: tamanio.id, desc: tamanio.desc, precio: tamanio.precio}"> {{tamanio.desc}} - $ {{tamanio.precio}}
                    </label>
                </div>
            </div>
            <hr class="mt-4">
            <h2>Datos de contacto</h2>
            <div class="mb-3">
                <label for="txtNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" v-model="$store.state.nombre" id="txtNombre" placeholder="Ingresa tu nombre">
            </div>
            <div class="mb-3">
                <label for="txtApellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" v-model="$store.state.apellido" id="txtApellido" placeholder="Apellido">
            </div>
            <div class="mb-3">
                <label for="txtMail" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" v-model="$store.state.email" id="txtMail" placeholder="Ingresa tu e-mail">
            </div>
            <div class="mb-3">
                <label for="txtTel" class="form-label">Teléfono</label>
                <input type="tel" class="form-control" v-model="$store.state.tel" name="txtTel" placeholder="Ingresa tu número telefónico">
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-success mt-3" @click="crearPedido" >Crear pastel</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Formulario',
    computed: {
        ...mapState(['sabores','betunes', 'toppings', 'tamanios'])
    },
    methods: {
        ...mapMutations(['crearPedido'])
    }
}
</script>

<style>
.form-container {
    border: solid 1px #ddd;
    padding: 20px;
    border-radius: 5px;
    max-width: 700px;
    margin: auto;
}
.checks {
    display: block;
}
.option-form label{
    display: block;
}
</style>