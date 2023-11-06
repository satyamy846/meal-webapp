<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
        </router-link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis ex distinctio nesciunt harum doloribus officia sunt repudiandae architecto quis? Non accusamus nesciunt illo! Aspernatur, enim quibusdam! Repellat, unde reprehenderit.</p>
        <p>{{ meals }}</p>
    </div>
    <div>{{ meals }}</div>

    
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import {onMounted, watch} from 'vue';
import store from '../store';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();

//we are rendering the page according to the data stored in state object.
const meals = computed(()=>{
    store.state.searchMealsByletter
    console.log('meals == ', store.state.searchMealsByletter)
});

watch(route, ()=>{
    store.dispatch('searchMealsByLetter', route.params.letter)
})

//calling the api through store action
onMounted(()=>{
    store.dispatch('searchMealsByLetter', route.params.letter );

})

</script>