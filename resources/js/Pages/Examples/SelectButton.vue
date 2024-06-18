<script setup>
import Nav from "@/Partials/Nav.vue";
import Example from "@/Pages/Example.vue";
import {ref} from "vue";
import HtmlCode from "@/Components/HtmlCode.vue";


const selection = ref({});

const handleSelectButton = {
    // show select button
    active: true,
    // allow multiple selection
    multiple: false,
    // handle click event
    click: (items, event) => {
        selection.value = items;

        if (items.length) {
            alert('Selected: ' + JSON.stringify(items[0], null, 4))
        }
    }
}
</script>

<template>
    <Example>
        <div class="grid sm:grid-cols-6 grid-cols-1 gap-4">
            <div class="col-span-1">
                <Nav current="select-button"/>
            </div>
            <div class="col-span-4">
                <div class=" dark:text-white">
                    <vue-finder id="vf" request="/vuefinder" :select-button="handleSelectButton"></vue-finder>
                </div>
                <div class="text-gray-700 dark:text-gray-200 p-3 my-3 border-l-2 border-amber-600 ">
                    This is an example of VueFinder with a select button. It allows the user to select a file or folder.
                </div>
                <HtmlCode>{{
`<script setup>
import {ref} from "vue";
const selection = ref({});

const handleSelectButton = {
    // show select button
    active: true,
    // allow multiple selection
    multiple: false,
    // handle click event
    click: (items, event) => {

        selection.value = items;

        if (items.length) {
            alert('Selected: ' + items[0].name)
        }
    }
}
</script>
<template>
    <vue-finder id="vf" request="/vuefinder" @select="handleSelectEvent"/>

    <pre>&#123;&#123; JSON.stringify(selection, null, 4) &#125;&#125;</pre>
</template>
`
                }}</HtmlCode>

            <pre class="text-gray-700 dark:text-slate-200 dark:bg-gray-800/30 p-3 text-sm overflow-auto">{{ JSON.stringify(selection, null, 4) }}</pre>

            </div>
        </div>
    </Example>
</template>
