<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
    </div>
    <div class="px-8 pb-3">
        <input type="text"
            class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
            placeholder="Search for meals" v-model="searchTerm" @change="searchMeals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8" >
        <MealItem  v-for="item in meals" :key="item.idMeal" :meal="item"/>
    </div>
    <pre>{{ meals }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const searchTerm = ref('');
import store from '../store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
const route = useRoute();
const meals = computed(() => store.state.searchMeals);


function searchMeals() {
    if (searchTerm.value) {
        store.dispatch('searchMeals', searchTerm.value)
    }
}

onMounted(() => {
    searchTerm.value = route.params.name;

    if (searchTerm.value) {
        searchMeals();
    }
});



</script>