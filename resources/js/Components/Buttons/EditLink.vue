<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: 'Edit',
    },
});
</script>

<template>
    <Link :href="href" class="btn btn-warning z-50">
        <i class="pi pi-file-edit"></i>
        <span>{{ label }}</span>
    </Link>
</template>
