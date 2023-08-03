import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindConfig from './tailwind.config';

export default defineConfig({
    plugins: [
        tailwindConfig,
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        VitePWA({
            registerType:'autoUpdate',
            outDir:'public',
            buildBase:'/',
            scope:'/',
            workbox:{
                runtimeCaching:[{
                    urlPattern: '/^\\/app\\/$/',
                    handler:'NetworkFirst',
                    options:{
                        cacheName:'app',
                        cacheableResponse:{
                            statuses:[200]
                        }
                    }
                }]
            },
            manifest:{
                name: 'Laravel PWA App',
                short_name: 'Laravel PWA',
                description: 'My Awesome App description',
                theme_color: '#F5F6F7',
                background_color: '#F5F6F7',
                scope: '/',
                start_url: '/',
                icons: [
                    {
                        src: '/iconPWA.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: "any maskable"
                    }
                ],
                shortcuts: [
                    {
                        name: 'My Shortcut',
                        short_name: 'Shortcut',
                        description: 'A shortcut that opens the app',
                        url: '/',
                        icons: [
                            {
                                src: '/iconPWA.png',
                                sizes: '512x512',
                                type: 'image/png',
                                purpose: "any maskable"
                            }
                        ]
                    }
                ]
            }
        })
    ],
});
