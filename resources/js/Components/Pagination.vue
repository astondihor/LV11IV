<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    links: Array,
    perPage: Number,
    currentPage: Number,
    total: Number,
});

const from = computed(() => {
    if (props.currentPage === 1) {
        return 1;
    }
    return (props.currentPage - 1) * props.perPage + 1;
});

const to = computed(() => {
    if (props.currentPage === 1) {
        return props.perPage;
    }
    return (props.currentPage - 1) * props.perPage + props.perPage;
});
</script>

<template>
    <div class="flex items-center justify-between">
        <div>
            <!-- info -->
            <p class="text-sm text-gray-700 dark:text-gray-400">
                Showing <span class="font-medium">{{ from }}</span> to
                <span class="font-medium">{{ to }}</span> of
                <span class="font-medium">{{ total }}</span> results
            </p>
        </div>
        <div class="flex items-center gap-4">
            <!-- per page -->
            <!-- pagination -->
            <div v-if="links.length > 3">
                <div class="-mb-1 flex flex-wrap">
                    <template v-for="(link, key) in links">
                        <div
                            v-if="link.url === null"
                            :key="key"
                            class="mb-1 mr-1 rounded border px-4 py-3 text-sm leading-4 text-gray-400"
                        >
                            <span v-html="link.label"></span>
                        </div>
                        <Link
                            v-else
                            :key="`link-${key}`"
                            class="mb-1 mr-1 rounded border px-4 py-3 text-sm leading-4 hover:bg-white focus:border-indigo-500 focus:text-indigo-500"
                            :class="{ 'bg-white': link.active }"
                            :href="link.url"
                        >
                            <span v-html="link.label"></span>
                        </Link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
