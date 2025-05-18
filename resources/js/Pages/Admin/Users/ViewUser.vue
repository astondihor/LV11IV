<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Card from 'primevue/card';
import BackToListLink from '@/Components/Buttons/BackToListLink.vue';
import EditLink from '@/Components/Buttons/EditLink.vue';
import { format } from 'date-fns';

defineProps({
    user: Object,
    roles: Array,
});
</script>
<template>
    <Head title="View Users" />
    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                View Users
            </h2>
        </template>

        <div class="py-6">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="mb-4 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <BackToListLink :href="route('admin.users.index')" />
                    </div>
                    <div class="flex items-center space-x-4">
                        <EditLink
                            :href="route('admin.users.edit', user.id)"
                            label="Edit this user"
                        />
                    </div>
                </div>
                <Card class="relative">
                    <template #content>
                        <div class="relative overflow-hidden">
                            <div class="overflow-x-auto">
                                <!-- content -->
                                <table class="table-auto border">
                                    <tbody class="divide-y">
                                        <tr class="divide-x">
                                            <td class="px-2 py-0.5">ID</td>
                                            <td class="px-2 py-0.5">
                                                {{ user.id }}
                                            </td>
                                        </tr>
                                        <tr class="divide-x">
                                            <td class="px-2 py-0.5">Name</td>
                                            <td class="px-2 py-0.5">
                                                {{ user.name }}
                                            </td>
                                        </tr>
                                        <tr class="divide-x">
                                            <td class="px-2 py-0.5">Email</td>
                                            <td class="px-2 py-0.5">
                                                {{ user.email }}
                                            </td>
                                        </tr>
                                        <tr class="divide-x">
                                            <td class="px-2 py-0.5">
                                                Email Verified At
                                            </td>
                                            <td class="px-2 py-0.5">
                                                {{
                                                    user.email_verified_at
                                                        ? format(
                                                              new Date(
                                                                  user.email_verified_at,
                                                              ),
                                                              'dd/MM/yyyy HH:mm',
                                                          )
                                                        : 'Not Verified'
                                                }}
                                            </td>
                                        </tr>
                                        <tr class="divide-x">
                                            <td class="px-2 py-0.5">
                                                Created At
                                            </td>
                                            <td class="px-2 py-0.5">
                                                {{
                                                    user.created_at
                                                        ? format(
                                                              new Date(
                                                                  user.created_at,
                                                              ),
                                                              'dd/MM/yyyy HH:mm',
                                                          )
                                                        : 'Not Verified'
                                                }}
                                            </td>
                                        </tr>
                                        <tr class="divide-x">
                                            <td class="px-2 py-0.5">
                                                Updated At
                                            </td>
                                            <td class="px-2 py-0.5">
                                                {{
                                                    user.updated_at
                                                        ? format(
                                                              new Date(
                                                                  user.updated_at,
                                                              ),
                                                              'dd/MM/yyyy HH:mm',
                                                          )
                                                        : 'Not Verified'
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
