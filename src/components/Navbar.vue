<template>
<header class="bg-white shadow h-16 flex items-center justify-between">
      <router-link :to="{name: 'home'}" class="text-gray-700 hover:text-purple-600 px-4">
        Home
      </router-link>
      <div class="flex items-center gap-4">
        <router-link :to="{name:'byName'}" class="text-gray-700 hover:text-purple-600 mr-4">
          Search Meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="text-gray-700 hover:text-purple-600 mr-4">
          Meals by Letter
        </router-link>
        <router-link :to="{name:'byIngredient'}" class="text-gray-700 hover:text-purple-600 mr-4">
          Meals by Ingredients
        </router-link>
      </div>
    </header>
</template>
