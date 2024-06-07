<script setup>
import Nav from "@/Partials/Nav.vue";
import Example from "@/Pages/Example.vue";
import {ref} from "vue";


const selectedFiles = ref([]);

const handleSelectEvent = (selection) => {
    selectedFiles.value = selection;
}

</script>

<template>
    <Example>
        <div class="grid sm:grid-cols-6 gap-4">
            <div class="col-span-1">
                <Nav current="select-event"/>
            </div>
            <div class="col-span-4">
                <div class=" dark:text-white">
                    <vue-finder id="vf" request="/vuefinder" @select="handleSelectEvent"></vue-finder>
                </div>

                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    This is an example of VueFinder with a select event. It will display the file and folder structure of the server and allow the user to select a file or folder. The selected files will be displayed below.
                </div>
                <div
                    class="my-3 p-2 rounded text-gray-700 bg-gray-200 dark:bg-gray-800/30 dark:text-slate-400 font-bold text-xl text-left">
<pre class="text-sm overflow-auto">
&lt;script setup&gt;
const selectedFiles = ref([]);

const handleSelectEvent = (selection) => {
    selectedFiles.value = selection;
}
&lt;/script&gt;

&lt;template&gt;
    &lt;vue-finder id="vf" request="/vuefinder" @select="handleSelectEvent"/&gt;

    &lt;pre&gt;&#123;&#123; JSON.stringify(selectedFiles, null, 4) &#125;&#125;&lt;/pre&gt;
&lt;/template&gt;
</pre>
</div>
            <pre class="text-gray-700 dark:text-slate-200 dark:bg-gray-800/30 p-3 text-sm overflow-auto">{{ JSON.stringify(selectedFiles, null, 4) }}</pre>
            </div>
        </div>
    </Example>
</template>
