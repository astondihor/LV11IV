<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    href: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: 'md',
    },
});
</script>
<template>
    <Link
        :href="href"
        class="btn btn-icon-only btn-warning btn-text !rounded-full"
        :class="{
            'p-button-sm h-8 w-8 text-sm': size === 'sm',
            'text-base': size === 'md',
            'p-button-lg h-12 w-12 text-lg': size === 'lg',
        }"
    >
        <i class="pi pi-file-edit p-button-icon"></i>
    </Link>
</template>
