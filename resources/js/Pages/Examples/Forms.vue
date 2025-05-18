<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
</script>
<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Examples > Forms
            </h2>
        </template>

        <div class="py-6">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <InputLabel for="name" value="Name" />
                <InputText />
                <InputError />

                <div>
                    <Link href="/admin/users/create" class="btn btn-primary">
                        <i class="pi pi-plus"></i>
                        <span>Add User</span>
                    </Link>
                    <Link href="/admin/users/create" class="btn btn-info">
                        <i class="pi pi-plus"></i>
                        <span>Add User</span>
                    </Link>
                    <Link href="/admin/users/create" class="btn btn-success">
                        <i class="pi pi-plus"></i>
                        <span>Add User</span>
                    </Link>
                    <Link href="/admin/users/create" class="btn btn-warning">
                        <i class="pi pi-plus"></i>
                        <span>Add User</span>
                    </Link>
                    <Link href="/admin/users/create" class="btn btn-danger">
                        <i class="pi pi-plus"></i>
                        <span>Add User</span>
                    </Link>
                    <Link href="/admin/users/create" class="btn btn-light">
                        <i class="pi pi-plus"></i>
                        <span>Add User</span>
                    </Link>
                    <Link href="/admin/users/create" class="btn btn-dark">
                        <i class="pi pi-plus"></i>
                        <span>Add User</span>
                    </Link>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
