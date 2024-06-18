<script setup>
import { Head } from '@inertiajs/vue3'
import Nav from "@/Partials/Nav.vue";
import Footer from "@/Partials/Footer.vue";
import Example from "@/Pages/Example.vue";
import HtmlCode from "@/Components/HtmlCode.vue";
</script>

<template>
    <Example>
        <div class="grid sm:grid-cols-6 grid-cols-1 gap-4">
            <div class="col-span-1">
                <Nav current="persist"/>
            </div>
            <div class="col-span-4">
                <div class=" dark:text-white">
                    <vue-finder id="vf" request="/vuefinder"  persist></vue-finder>
                </div>
                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    This is an example of VueFinder with persistence enabled. It will remember the last opened folder and will open it when the component is reloaded.
                </div>
                <HtmlCode>{{`<vue-finder id="vf" request="/vuefinder" persist />` }}</HtmlCode>
            </div>
        </div>
    </Example>
</template>
