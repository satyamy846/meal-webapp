<template>
   <div class="w-[800px] mx-auto">
    <pre>{{ meal }}</pre>
    <h1 class="text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="cover">
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
        <div>
            <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
        </div>
        <div>
            <strong class="font-bold">Area:</strong> {{ meal.strArea }}
        </div>
        <div>
            <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
        </div>
    </div>
    <div class="">
        <div class="flex justify-between">
            <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
            <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        </div>
        <div class="flex justify-between">
            <ul>
            <template v-for="(ele, index) of new Array(20)">
                <li v-if="meal[`strIngredient${index+1}`]">
                    {{ index + 1 }} {{ meal[`strIngredient${index+1}`] }}
                </li>
            </template>
            
        </ul>
       
        <ul>
            <template v-for="(ele, index) of new Array(20)">
                <li v-if="meal[`strMeasure${index+1}`]">
                    {{ index + 1 }} {{ meal[`strMeasure${index+1}`] }}
                </li>
            </template>
            
        </ul>
        </div>
        <div>
            <h3 class="mt-4">Instructions:</h3>
            <p>{{ meal.strInstructions }}</p>
        </div>
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
    </div>
    
   </div>
</template>

<script setup>

import axiosClient from '../utils/axiosClient';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';

const meal = ref('');
const route = useRoute();

onMounted(()=>{
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then((data)=>{
        meal.value = data.data.meals[0] || {};
    })
    .catch((err)=>{
        console.log(err);
    })
})


</script>