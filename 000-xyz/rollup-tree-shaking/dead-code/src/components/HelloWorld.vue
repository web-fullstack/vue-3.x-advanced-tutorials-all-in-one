<template>
  <h2 class="green">{{ msg }}</h2>
  <p>{{ count }}</p>
  <button @click="add">add</button>
</template>

<script setup>
import { ref } from 'vue'

defineProps({msg: {
  type: String,
  default: '???',
}});

const count = ref(0);

setTimeout(() => {
  count.value = 1;
}, 1000);

const add = () => {
  count.value += 1;
};
</script>


