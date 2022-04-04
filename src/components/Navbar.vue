<template>
    <nav class="navbar navbar-dark bg-dark">
        <ul>
            <li><a href=""><router-link to="/"><span>Inicio</span></router-link></a></li>
            <!--<li><a href=""><router-link to="/about"><span>About</span></router-link></a></li>-->
            <li><a href=""><router-link to="/pedidos"><span>Pedidos</span></router-link></a></li>
            <router-view/>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
* {
    box-sizing: border-box;
}
nav {
    display: flex;
    justify-content: flex-end;
}
li {
    display: inline-block;
    list-style: none;
    margin-top: 10px;
}
li a {
    text-decoration: none;
    color: #FFF;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 18px;

}
li a:hover {
    color: #E9721B;
    transition: ease;
}
</style>