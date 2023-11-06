<template>
    <a :href="href"
        class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
        target="_blank">
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href:String
})
</script>