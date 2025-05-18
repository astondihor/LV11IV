<script setup>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    maxWidth: {
        type: Number,
        default: 300,
    },
});

const emit = defineEmits(['update:modelValue', 'reset']);

function mamam(event) {
    emit('update:modelValue', event.target.value);
}
</script>

<template>
    <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-search" />
        </InputGroupAddon>
        <InputText
            name="search"
            type="search"
            class="w-full"
            :maxlength="maxWidth"
            placeholder="Search…"
            :value="modelValue"
            :onInput="mamam"
        />
    </InputGroup>

    <button
        class="ml-3 rounded-full p-1 text-sm font-medium text-gray-500 hover:bg-slate-100 hover:text-gray-700 focus:text-indigo-500"
        type="button"
        @click="emit('reset')"
    >
        <span class="sr-only">Reset</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5 shrink-0 fill-current"
        >
            <path
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
            />
        </svg>
    </button>
</template>
