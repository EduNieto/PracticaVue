import { createStore } from 'vuex'

export default createStore({
  state: {
    id: '',
    sabores: [
      {id: 1, desc: 'Tres leches'},
      {id: 2, desc: 'Vainilla'},
      {id: 3, desc: 'Chocolate'},
      {id: 4, desc: 'Moka'},
      {id: 5, desc: 'Red velvet'}
    ],
    saborSeleccionado: '',
    betunes: [
      {id: 1, desc: 'Clásico'},
      {id: 2, desc: 'Merengue'},
      {id: 3, desc: 'Chocolate'}
    ],
    betunSeleccionado: '',
    toppings: [
      {id: 1, desc: 'Fresa'},
      {id: 2, desc: 'Mango'},
      {id: 3, desc: 'Zarzamora'},
      {id: 4, desc: 'Queso holandés'},
      {id: 5, desc: 'Coco rayado'},
      {id: 6, desc: 'Ferrero'},
      {id: 7, desc: 'Oreo'},
      {id: 8, desc: "M&M's"},
      {id: 9, desc: 'Malvavisco'},
      {id: 10, desc: 'Caramelo'},
      {id: 11, desc: 'Nutella'},
      {id: 12, desc: 'Dulce de leche'}
    ],
    toppingSeleccionado: [],
    tamanios: [
      {id: 1, desc: 'Chico', precio: 200},
      {id: 2, desc: 'Mediano', precio: 300},
      {id: 3, desc: 'Grande', precio: 400},
    ],
    tamanioSeleccionado: [],
    nombre: '',
    apellido: '',
    email: '',
    tel: '',
    pedido: []
  },
  getters: {
  },
  mutations: {
    crearPedido(state) {
      state.pedido.push({
        id: Date.now(),
        sabor: state.saborSeleccionado,
        betun: state.betunSeleccionado,
        toppings: state.toppingSeleccionado,
        tamanio: state.tamanioSeleccionado,
        nombre: state.nombre,
        apellido: state.apellido,
        email: state.email,
        tel: state.tel,
      })
      console.log(state.pedido);
      alert('Pedido realizado con exito')
      state.saborSeleccionado = ''
      state.betunSeleccionado = ''
      state.toppingSeleccionado = []
      state.tamanioSeleccionado = '',
      state.nombre = ''
      state.apellido = ''
      state.email = ''
      state.tel = ''
      state.nombre = ''
      state.apellido = ''
      state.email = ''
      state.tel = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
