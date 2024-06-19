<script setup>
import Nav from "@/Partials/Nav.vue";
import Example from "@/Pages/Example.vue";
import {ref} from "vue";
import HtmlCode from "@/Components/HtmlCode.vue";


const selectedFiles = ref([]);

const handleSelectEvent = (selection) => {
    selectedFiles.value = selection;
}

</script>

<template>
    <Example>
        <div class="grid sm:grid-cols-6 grid-cols-1 gap-4">
            <div class="col-span-1">
                <Nav current="select-event"/>
            </div>
            <div class="col-span-4">
                <div class=" dark:text-white">
                    <vue-finder id="vf" request="/vuefinder" @select="handleSelectEvent"></vue-finder>
                </div>

                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    This is an example of VueFinder with a select event. When a file or folder is selected, the select event will be triggered and the selected files will be displayed below.
                </div>
                <HtmlCode>{{
`<script setup>
import {ref} from "vue";
const selectedFiles = ref([]);

const handleSelectEvent = (selection) => {
    selectedFiles.value = selection;
}
</script>
<template>
    <vue-finder id="vf" request="/vuefinder" @select="handleSelectEvent"/>

    <pre>&#123;&#123; JSON.stringify(selectedFiles, null, 4) &#125;&#125;</pre>
</template>
`
                }}</HtmlCode>
            <pre class="text-gray-700 dark:text-slate-200 dark:bg-gray-800/30 p-3 text-sm overflow-auto">{{ JSON.stringify(selectedFiles, null, 4) }}</pre>
            </div>
        </div>
    </Example>
</template>
