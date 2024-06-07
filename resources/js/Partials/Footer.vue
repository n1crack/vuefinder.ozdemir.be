<script setup>
import GithubButton from 'vue-github-button'

</script>

<template>
    <div>
        <div class="my-5 text-gray-700 dark:text-gray-400 font-thin text-sm text-center">
            If you like this library, please consider giving it a star on Github or sponsoring the project.
        </div>

        <div class="text-center space-x-3">

            <github-button href="https://github.com/n1crack/vuefinder"
                           data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star"
                           data-size="large" data-show-count="true" aria-label="Star n1crack/vuefinder on GitHub">Star
            </github-button>


            <github-button href="https://github.com/sponsors/n1crack"
                           data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-heart"
                           data-size="large" aria-label="Sponsor @n1crack on GitHub">Sponsor
            </github-button>

        </div>
    </div>
</template>
