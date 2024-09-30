<script setup lang="ts">
import { onMounted } from 'vue';

const setGlobalFont = () => {
  const locale = localStorage.getItem('locale') || 'en';
  const body = document.body;

  if (locale === 'en') {
    body.classList.add('font-mali');
    body.classList.remove('font-noto-sans-lao');
  } else {
    body.classList.add('font-noto-sans-lao');
    body.classList.remove('font-mali');
  }
};

onMounted(() => {
  setGlobalFont();
});
</script>

<template>
  <div class="bg-color7 ">
    
    <router-view />
  </div>
</template>

<style scoped>

</style>
