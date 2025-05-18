<script setup>
import { ref, watch, onMounted } from 'vue';
import Select from 'primevue/select';

const props = defineProps({
    perPage: Number,
});

const selected = ref(null);

onMounted(() => {
    selected.value = props.perPage;
});

const options = ref([
    { value: 5, label: '5 per page' },
    { value: 10, label: '10 per page' },
    { value: 15, label: '15 per page' },
    { value: 20, label: '20 per page' },
    { value: 30, label: '30 per page' },
    { value: 50, label: '50 per page' },
    { value: 100, label: '100 per page' },
]);

watch(
    () => props.perPage,
    (newVal) => {
        selected.value = newVal;
    },
);
</script>

<template>
    <Select
        :options="options"
        v-model="selected"
        optionLabel="label"
        optionValue="value"
        checkmark
        :highlightOnSelect="false"
        @change="$emit('perPageChange', selected)"
    />
</template>
