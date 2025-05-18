<script setup>
import { ref, watch } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Card from 'primevue/card';
import { format } from 'date-fns';
import Button from 'primevue/button';
import EditLink from '@/Components/Tables/Buttons/EditLink.vue';
import ViewLink from '@/Components/Tables/Buttons/ViewLink.vue';
import { useConfirm } from 'primevue/useconfirm';
import ConfirmDialog from 'primevue/confirmdialog';
import { useToast } from 'primevue/usetoast';
import Tag from 'primevue/tag';
import Pagination from '@/Components/Pagination.vue';
import SearchFilter from '@/Components/SearchFilter.vue';
import throttle from 'lodash/throttle';
import PerPage from '@/Components/PerPage.vue';
import pickBy from 'lodash/pickBy';
import mapValues from 'lodash/mapValues';

const confirm = useConfirm();
const toast = useToast();

const props = defineProps({
    users: {
        type: Object,
        default: () => {},
    },
    filters: {
        type: Object,
        default: () => {},
    },
    per_page: Number,
    can: {
        type: Object,
        default: () => {},
    },
});

let form = ref({
    search: props.filters.search,
    per_page: props.filters.per_page
        ? parseInt(props.filters.per_page)
        : props.per_page,
});

const isLoading = ref(false);

watch(
    form,
    throttle(function () {
        router.get(route('admin.users.index'), pickBy(form.value), {
            preserveState: true,
            replace: true,
            preserveScroll: true,
        });
    }, 500),
    { deep: true },
);

function handlePerPage(value) {
    form.value.per_page = parseInt(value);
}

function reset() {
    form.value = mapValues(form.value, () => null);
    form.value.per_page = 5;
}

function attemptToDelete(id) {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true,
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger',
        },
        accept: () => {
            axios.delete(route('admin.users.destroy', id)).then((response) => {
                if (
                    response.status === 200 &&
                    response.statusText === 'OK' &&
                    response.data.success
                ) {
                    router.reload({ only: ['users'] });
                    toast.add({
                        severity: 'success',
                        summary: 'Confirmed',
                        detail: 'Record deleted',
                        life: 3000,
                    });
                } else {
                    toast.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Something went wrong',
                        life: 3000,
                    });
                }
            });
        },
        reject: () => {
            toast.add({
                severity: 'error',
                summary: 'Rejected',
                detail: 'You have rejected',
                life: 3000,
            });
        },
    });
}
</script>

<template>
    <Head title="Manage Users" />
    <ConfirmDialog />
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
                <div class="mb-4 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <Link
                            href="/admin/users/create"
                            class="btn btn-success"
                        >
                            <i class="pi pi-plus"></i>
                            <span>Add User</span>
                        </Link>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center space-x-2">
                            <!-- <Link :href="route('admin.roles.index')">Roles</Link> -->
                        </div>
                    </div>
                </div>
                <Card>
                    <template #content>
                        <div class="relative -mx-5 overflow-hidden">
                            <div class="overflow-x-auto">
                                <!-- content -->
                                <div
                                    class="flex items-center justify-between px-4 pb-4"
                                >
                                    <PerPage
                                        :per-page="form.per_page"
                                        @per-page-change="handlePerPage"
                                    />
                                    <div class="flex items-center space-x-2">
                                        <div v-if="isLoading">LOADING...</div>
                                        <SearchFilter
                                            v-model="form.search"
                                            @reset="reset"
                                        />
                                    </div>
                                </div>

                                <table
                                    class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                                >
                                    <thead
                                        class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                                    >
                                        <tr>
                                            <th scope="col" class="px-2.5 py-3">
                                                &nbsp;
                                            </th>
                                            <th scope="col" class="px-2.5 py-3">
                                                ID
                                            </th>
                                            <th scope="col" class="px-2.5 py-3">
                                                Name
                                            </th>
                                            <th scope="col" class="px-2.5 py-3">
                                                Email
                                            </th>
                                            <th scope="col" class="px-2.5 py-3">
                                                Role
                                            </th>
                                            <th scope="col" class="px-2.5 py-3">
                                                Email Verified At
                                            </th>
                                            <th scope="col" class="px-2.5 py-3">
                                                Created At
                                            </th>
                                            <th scope="col" class="px-2.5 py-3">
                                                Updated At
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="user in users.data"
                                            :key="user.id"
                                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                        >
                                            <td class="px-2.5 py-3">
                                                <div
                                                    class="flex items-center space-x-0"
                                                >
                                                    <ViewLink
                                                        :href="`/admin/users/${user.id}`"
                                                        size="sm"
                                                    />
                                                    <EditLink
                                                        :href="`/admin/users/${user.id}/edit`"
                                                        size="sm"
                                                    />
                                                    <Button
                                                        severity="danger"
                                                        variant="text"
                                                        rounded
                                                        aria-label="Delete"
                                                        size="small"
                                                        @click="
                                                            attemptToDelete(
                                                                user.id,
                                                            )
                                                        "
                                                        icon="pi pi-trash"
                                                    />
                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-2.5 py-3"
                                            >
                                                {{ user.id }}
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-2.5 py-3"
                                            >
                                                <span
                                                    class="text-lg text-primary-500"
                                                    >{{ user.name }}</span
                                                >
                                            </td>
                                            <td class="px-2.5 py-3">
                                                {{ user.email }}
                                            </td>
                                            <td class="px-2.5 py-3">
                                                <template v-if="user.roles">
                                                    <Tag
                                                        v-for="role in user.roles"
                                                        :key="role.id"
                                                        rounded
                                                        :value="role.name"
                                                        severity="warn"
                                                        class="!py-px"
                                                    />
                                                </template>
                                            </td>
                                            <td class="px-2.5 py-3">
                                                {{
                                                    format(
                                                        user.email_verified_at,
                                                        'd MMM yyyy h:mm a',
                                                    )
                                                }}
                                            </td>
                                            <td class="px-2.5 py-3">
                                                {{
                                                    format(
                                                        user.created_at,
                                                        'd MMM yyyy h:mm a',
                                                    )
                                                }}
                                            </td>
                                            <td class="px-2.5 py-3">
                                                {{
                                                    format(
                                                        user.updated_at,
                                                        'd MMM yyyy h:mm a',
                                                    )
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-4 px-6">
                                <Pagination
                                    :links="users.links"
                                    :total="users.total"
                                    :per-page="users.per_page"
                                    :currentPage="users.current_page"
                                />
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
