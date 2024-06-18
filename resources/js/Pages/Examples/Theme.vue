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
                <Nav current="theme"/>
            </div>
            <div class="col-span-4">
                <div class=" dark:text-white">
                    <vue-finder id="vf_light" request="/vuefinder" theme="light"></vue-finder>
                </div>

                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    Light theme example of VueFinder. You can change the theme of VueFinder by setting the theme prop to "light", "dark" or "system".
                </div>

                <HtmlCode>{{
                    `<vue-finder id="vf_light" request="/vuefinder" theme="light"></vue-finder>`
                }}</HtmlCode>


                <div class=" dark:text-white mt-8">
                    <vue-finder id="vf_dark" request="/vuefinder" theme="dark"></vue-finder>
                </div>

                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    Dark theme example of VueFinder.
                </div>

                <HtmlCode>{{
                    `<vue-finder id="vf_dark" request="/vuefinder" theme="dark"></vue-finder>`
                }}</HtmlCode>
            </div>
        </div>
    </Example>
</template>
