<script setup>
import { Head } from '@inertiajs/vue3'
import Nav from "@/Partials/Nav.vue";
import Footer from "@/Partials/Footer.vue";
import Header from "@/Partials/Header.vue";
</script>

<template>
    <Head title="Vuefinder File Manager Example" />
    <div class=" h-screen flex items-top justify-center  sm:pt-0">
        <div class="w-full sm:px-10 pt-5">

            <Header />

            <slot />

            <Footer />
        </div>
    </div>
</template>
