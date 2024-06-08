<script setup>
import Nav from "@/Partials/Nav.vue";
import Example from "@/Pages/Example.vue";

const FEATURE = {
    EDIT: 'edit',
    NEW_FILE: 'newfile',
    NEW_FOLDER: 'newfolder',
    PREVIEW: 'preview',
    ARCHIVE: 'archive',
    UNARCHIVE: 'unarchive',
    SEARCH: 'search',
    RENAME: 'rename',
    UPLOAD: 'upload',
    DELETE: 'delete',
    FULL_SCREEN: 'fullscreen',
    DOWNLOAD: 'download',
    LANGUAGE: 'language',
}

const ENABLED_FEATURES = [
   FEATURE.NEW_FILE,
   FEATURE.NEW_FOLDER,
   FEATURE.PREVIEW,
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

                <div class="mt-3 p-5 rounded text-gray-700 bg-gray-200 dark:bg-gray-800/30 dark:text-slate-400 font-bold text-xl text-left p-2">
<pre class="text-sm overflow-auto">
&lt;script setup&gt;
const FEATURE = {
    EDIT: 'edit',
    NEW_FILE: 'newfile',
    NEW_FOLDER: 'newfolder',
    PREVIEW: 'preview',
    ARCHIVE: 'archive',
    UNARCHIVE: 'unarchive',
    SEARCH: 'search',
    RENAME: 'rename',
    UPLOAD: 'upload',
    DELETE: 'delete',
    FULL_SCREEN: 'fullscreen',
    DOWNLOAD: 'download',
    LANGUAGE: 'language',
}

const ENABLED_FEATURES = [
   FEATURE.NEW_FILE,
   FEATURE.NEW_FOLDER,
   FEATURE.PREVIEW,
]

&lt;/script&gt;

&lt;template&gt;

    &lt;vue-finder id="vf" request="/vuefinder" :features="ENABLED_FEATURES"/&gt;
&lt;/template&gt;
</pre>
                </div>
            </div>
        </div>
    </Example>
</template>
