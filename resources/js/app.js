import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';

import '../../../vuefinder/dist/style.css'
import VueFinder from '../../../vuefinder/dist/vuefinder.js'

// import 'vuefinder/dist/style.css'
// import VueFinder from "vuefinder"

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    progress: {
        color: '#4B5563',
    },
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(VueFinder)
            .use(ZiggyVue, Ziggy)
            .mount(el)
    },
})
