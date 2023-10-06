<script setup>
import { ref } from 'vue';
const title=ref("ABOUT is about ME")
import Cart from '../components/Cart.vue';
</script>
<template>
    <div class="about">
    <h2>{{title}}</h2>
</div>
    <Cart/>
</template>