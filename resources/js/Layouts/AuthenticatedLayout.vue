<script setup>
import DynamicDialog from 'primevue/dynamicdialog';
import Toast from 'primevue/toast';
import AppNavbar from '@/Components/Layouts/AppNavbar.vue';
</script>

<template>
    <div>
        <Toast />
        <DynamicDialog />
        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            <AppNavbar />
            <!-- Page Heading -->
            <header
                class="bg-white shadow dark:bg-gray-800"
                v-if="$slots.header"
            >
                <div
                    class="mx-auto max-w-7xl bg-slate-50 px-4 py-1 sm:px-6 lg:px-8"
                >
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
