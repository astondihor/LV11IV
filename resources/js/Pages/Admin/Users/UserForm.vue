<script setup>
import { onBeforeMount } from 'vue';
import { useForm, Link } from '@inertiajs/vue3';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const props = defineProps({
    user: {
        type: Object,
        default: () => ({}),
    },
    roles: {
        type: Object,
        default: () => {},
    },
    permissions: {
        type: Array,
        default: () => [],
    },
    editMode: {
        type: Boolean,
        default: false,
    },
});

const form = useForm({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    roles: null,
});

onBeforeMount(() => {
    if (props.editMode) {
        form.name = props.user.name;
        form.email = props.user.email;
        form.role = props.user.role ? props.user.role.name : null;
    }
});

const submit = () => {
    console.log('submit');
    if (props.editMode) {
        form.put(route('admin.users.update', props.user.id), {
            onSuccess: () => {
                toast.add({
                    severity: 'success',
                    summary: 'Success!',
                    detail: 'User updated successfully',
                    life: 5000,
                });
            },
        });
        return;
    }
    form.transform((data) => ({
        ...data,
        lanjut: true,
    })).post(route('admin.users.store'), {
        onSuccess: () => {
            toast.add({
                severity: 'success',
                summary: 'Success!',
                detail: 'User created successfully',
                life: 5000,
            });
        },
    });
};

function saveAndNew() {
    form.post(route('admin.users.store'), {
        preserveScroll: true,
        preserveState: true,
        replace: false,
        onSuccess: () => {
            form.reset();
            form.clearErrors();
            toast.add({
                severity: 'success',
                summary: 'Success!',
                detail: 'User created successfully',
                life: 5000,
            });
        },
    });
}
</script>
<template>
    <div>
        <form @submit.prevent="submit">
            <Card class="max-w-md">
                <template #title>
                    <span v-if="editMode">Edit</span
                    ><span v-else>Create</span> User
                </template>
                <template #content>
                    <div class="relative mb-8 overflow-hidden">
                        <div class="overflow-x-auto">
                            <!-- content -->
                            <div class="grid grid-cols-1 gap-4">
                                <div class="col-span-1">
                                    <InputLabel
                                        for="name"
                                        value="Name"
                                        required
                                    />
                                    <InputText
                                        id="name"
                                        type="text"
                                        class="w-full"
                                        v-model="form.name"
                                        :invalid="form.errors.name"
                                    />
                                    <InputError
                                        class="mt-1"
                                        :message="form.errors.name"
                                    />
                                </div>
                                <div class="col-span-1">
                                    <InputLabel
                                        for="email"
                                        value="Email"
                                        required
                                    />
                                    <InputText
                                        id="email"
                                        type="text"
                                        class="w-full"
                                        v-model="form.email"
                                        :invalid="form.errors.email"
                                    />
                                    <InputError
                                        class="mt-1"
                                        :message="form.errors.email"
                                    />
                                </div>
                                <div class="col-span-1">
                                    <InputLabel
                                        v-if="editMode"
                                        for="password"
                                        value="Password"
                                    />
                                    <InputLabel
                                        v-else
                                        for="password"
                                        value="Password"
                                        required
                                    />
                                    <InputText
                                        id="password"
                                        type="password"
                                        class="w-full"
                                        v-model="form.password"
                                        :invalid="form.errors.password"
                                    />
                                    <InputError
                                        class="mt-1"
                                        :message="form.errors.password"
                                    />
                                </div>
                                <div class="col-span-1">
                                    <InputLabel
                                        v-if="editMode"
                                        for="password_confirmation"
                                        value="Password Confirmation"
                                    />
                                    <InputLabel
                                        v-else
                                        for="password_confirmation"
                                        value="Password Confirmation"
                                        required
                                    />
                                    <InputText
                                        id="password_confirmation"
                                        type="password"
                                        class="w-full"
                                        v-model="form.password_confirmation"
                                        :invalid="form.errors.password"
                                    />
                                    <InputError
                                        class="mt-1"
                                        :message="form.errors.password"
                                    />
                                </div>
                                <div class="col-span-1">
                                    <InputLabel
                                        for="roles"
                                        value="Roles"
                                        required
                                    />
                                    <MultiSelect
                                        v-model="form.roles"
                                        :options="roles"
                                        optionLabel="name"
                                        optionValue="name"
                                        class="w-full"
                                        placeholder="Select Roles"
                                        :invalid="form.errors.roles"
                                    />
                                    <InputError
                                        class="mt-1"
                                        :message="form.errors.roles"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex items-center justify-end gap-2">
                        <Link
                            :href="route('admin.users.index')"
                            class="btn btn-white"
                        >
                            <i class="pi pi-times"></i>
                            Cancel
                        </Link>
                        <Button
                            v-if="editMode"
                            type="submit"
                            icon="pi pi-save"
                            severity="warn"
                            label="Update"
                        />
                        <div v-else class="flex items-center gap-2">
                            <Button
                                type="button"
                                icon="pi pi-save"
                                severity="secondary"
                                label="Save &amp; New"
                                @click="saveAndNew"
                            />
                            <Button
                                type="submit"
                                icon="pi pi-save"
                                severity="primary"
                                label="Save"
                            />
                        </div>
                    </div>
                </template>
            </Card>
        </form>
    </div>
</template>
