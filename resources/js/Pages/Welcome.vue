<script setup>

</script>

<template>
    <Head title="Vuefinder File Manager Example" />
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="w-full md:w-1/2">
            <div class="text-gray-700 dark:text-white font-thin text-2xl text-center">Vuefinder File Library</div>

            <div class="m-2 text-white font-thin text-lg text-center">
                <a class="mx-3 text-emerald-500" href="https://github.com/n1crack/vuefinder">Github</a>
                <a class="mx-3 text-emerald-500" href="https://www.npmjs.com/package/vuefinder">Npm</a>
            </div>

            <vue-finder id="vf" url="/vuefinder"></vue-finder>
        </div>
    </div>
</template>
