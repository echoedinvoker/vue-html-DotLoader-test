<template>
  <div v-for="user in users" :key="user.name">
    {{`${user.name} has ${user.orders} orders`}}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([
  { name: 'Matt', orders: 10 },
  { name: 'FishBro', orders: 7 },
])
</script>

