<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Link :href="href" class="btn btn-white">
        <i class="pi pi-arrow-left"></i>
        <span>Back to List</span>
    </Link>
</template>
