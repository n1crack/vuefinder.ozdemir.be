<script setup>
import { Head } from '@inertiajs/vue3'
import Footer from "@/Partials/Footer.vue";
import Header from "@/Partials/Header.vue";
</script>

<template class="">
    <Head title="Vuefinder File Manager Example" />
    <div class="h-screen flex items-top justify-center sm:items-center sm:pt-0">
        <div class="w-full md:w-1/2">
            <Header></Header>

            <vue-finder id="vf" request="/vuefinder"></vue-finder>

            <Footer></Footer>
        </div>
    </div>
</template>
