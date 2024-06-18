<script setup>
import { Head } from '@inertiajs/vue3'
import Nav from "@/Partials/Nav.vue";
import Footer from "@/Partials/Footer.vue";
import Header from "@/Partials/Header.vue";

import "highlight.js/styles/nord.css";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage('html', xml);

import {onMounted} from "vue";

onMounted(() => {
   hljs.highlightAll();
})

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
