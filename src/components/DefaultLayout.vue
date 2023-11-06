<template>
<!-- <div class="bg-gray-100 h-full">
    <Navbar/>
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view/> 
      </div>
    </main>
  </div> -->
  <div>
    <Navbar/>
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';

</script>