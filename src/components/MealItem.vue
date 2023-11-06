<template>
<div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{name:'mealDetails' ,params:{id: meal.idMeal}}">

        <img :src="meal.strMealThumb" :alt="meal.strMeal" 
        class="rounded-t-xl w-full h-48 object-cover">
    </router-link>
        <div class="p-3">
            <h1 class="font-bold">{{ meal.strMeal }}</h1>
        </div>
        <div class="flex meals-center justify-between">
            <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        </div>
</div>

</template>


<script setup>
import YoutubeButton from './YoutubeButton.vue';

const props = defineProps({
    meal:{
        type:Object,
        required:true
    }
})
</script>