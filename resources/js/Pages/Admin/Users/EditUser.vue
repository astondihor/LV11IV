<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import UserForm from './UserForm.vue';
import BackToListLink from '@/Components/Buttons/BackToListLink.vue';

defineProps({
    user: Object,
    roles: Object,
});
</script>
<template>
    <Head title="Edit User" />
    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Edit User
            </h2>
        </template>

        <div class="py-6">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="mb-6 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <BackToListLink :href="route('admin.users.index')" />
                    </div>
                    <div class="flex items-center space-x-4">
                        <!-- right side -->
                    </div>
                </div>
                <UserForm :user="user" :roles="roles" :edit-mode="true" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
