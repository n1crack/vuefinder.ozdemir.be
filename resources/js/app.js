import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';

import 'vuefinder/dist/style.css'
import VueFinder from "vuefinder"

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
            .use(VueFinder,
                {
                    i18n: {
                        en:  () =>    import ("vuefinder/dist/locales/en.js"),
                        fr:  () =>    import ("vuefinder/dist/locales/fr.js"),
                        de:  () =>    import ("vuefinder/dist/locales/de.js"),
                        fa:  () =>    import ("vuefinder/dist/locales/fa.js"),
                        he:  () =>    import ("vuefinder/dist/locales/he.js"),
                        hi:  () =>    import ("vuefinder/dist/locales/hi.js"),
                        ru:  () =>    import ("vuefinder/dist/locales/ru.js"),
                        sv:  () =>    import ("vuefinder/dist/locales/sv.js"),
                        tr:  () =>    import ("vuefinder/dist/locales/tr.js"),
                        zhCN:  () =>  import ("vuefinder/dist/locales/zhCN.js"),
                        zhTW:  () =>  import ("vuefinder/dist/locales/zhTW.js"),
                    }
                })
            .use(ZiggyVue, Ziggy)
            .mount(el)
    },
})
