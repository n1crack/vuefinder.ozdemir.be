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
                <Nav current="path"/>
            </div>
            <div class="col-span-4">
                <div class=" dark:text-white">
                    <vue-finder id="vf" request="/vuefinder" path="local://public/media/public/uploads/test/example_long/another folder/new folder" ></vue-finder>
                </div>
                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    This is an example of VueFinder with a predefined path. It will display the file and folder structure of the server starting from the specified path.
                </div>
<HtmlCode>{{
`<vue-finder
    id="vf"
    request="/vuefinder"
    path="local://public/media/public/uploads/test/example_long/another folder/new folder" />`
                }}</HtmlCode>
            </div>
        </div>
    </Example>
</template>
