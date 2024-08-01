<template>
  <router-link v-if="linkTo" :to="{ name: 'Default', params: { id: linkTo } }" class="no-underline cursor-pointer font-normal rounded-lg text-sm px-2.5 py-1.5 leading-[140%] flex gap-x-2 items-center select-none" :class="buttonClasses">
    <slot />
    {{ label }}
  </router-link>
  <button v-else type="button" class="cursor-pointer font-normal rounded-lg text-sm px-2.5 py-1.5 leading-[140%] flex gap-x-2 items-center select-none" :class="buttonClasses">
    <slot />
    {{ label }}
  </button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

// NOTE: color prop => 'black' | 'transparent' = 'black';
const props = defineProps({
  label: String,
  color: {
    type: String,
    default: 'black',
  },
  linkTo: String
})
let buttonClasses = ref('')
switch (props.color) {
  case 'black':
    buttonClasses.value = 'text-white bg-black hover:bg-background-color-blue focus:outline-none focus:ring-4 focus:ring-blue-300';
    break;
  case 'transparent':
    buttonClasses.value = 'text-black bg-transparent hover:bg-background-color-background-secondary1 focus:outline-none focus:ring-4 focus:ring-background-color-background-secondary1';
    break;
}
</script>
