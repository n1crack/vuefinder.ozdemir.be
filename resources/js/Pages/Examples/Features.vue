<script setup>
import Nav from "@/Partials/Nav.vue";
import Example from "@/Pages/Example.vue";
import HtmlCode from "@/Components/HtmlCode.vue";
import {FEATURES} from "vuefinder/dist/features.js";

const ENABLED_FEATURES = [
   FEATURES.NEW_FILE,
   FEATURES.NEW_FOLDER,
   FEATURES.PREVIEW,
]

</script>

<template>
    <Example>
        <div class="grid sm:grid-cols-6 grid-cols-1 gap-4">
            <div class="col-span-1">
                <Nav current="features"/>
            </div>
            <div class="col-span-4">
                <div class=" dark:text-white">
                    <vue-finder id="vf" request="/vuefinder" :features="ENABLED_FEATURES"></vue-finder>
                </div>

                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    You can enable or disable features of VueFinder by passing an array of features to the features prop.
                </div>

                <HtmlCode>{{
`<script setup>
import {FEATURES} from "vuefinder/dist/features.js";

const ENABLED_FEATURES = [
   FEATURES.NEW_FILE,
   FEATURES.NEW_FOLDER,
   FEATURES.PREVIEW,
]

</script>
<template>
    <vue-finder id="vf" request="/vuefinder" :features="ENABLED_FEATURES"> </vue-finder>
</template>
`
                }}</HtmlCode>

            </div>
        </div>
    </Example>
</template>
