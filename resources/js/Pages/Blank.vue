<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Card from 'primevue/card';
</script>
<template>
    <Head title="Manage Users" />
    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Manage Users
            </h2>
        </template>

        <div class="py-6">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="mb-6 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <Link
                            href="/admin/users/create"
                            class="btn btn-primary"
                        >
                            <span>Add User</span>
                        </Link>
                    </div>
                    <div class="flex items-center space-x-4">Roles</div>
                </div>
                <Card>
                    <!-- <template #title> Users </template> -->
                    <template #content>
                        <div class="relative overflow-hidden">
                            <div class="overflow-x-auto">
                                <!-- content -->
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
