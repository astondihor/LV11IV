import 'primeicons/primeicons.css';
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import Aura from '@primeuix/themes/aura';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                    ripple: true,
                    options: {
                        prefix: 'p',
                        darkModeSelector: 'system',
                        cssLayer: false,
                    },
                },
                zIndex: {
                    modal: 1100, //dialog, drawer
                    overlay: 1000, //select, popover
                    menu: 1000, //overlay menus
                    tooltip: 1100, //tooltip
                },
            })
            .use(ToastService)
            .use(ConfirmationService)
            .use(DialogService)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
