<template>
  <header
    class="container max-w-full 2xl:max-w-screen-2xl px-4 md:px-8 self-stretch bg-white flex flex-col items-start justify-start max-w-full box-border pt-9 lg:pt-0"
  >
    <Navbar />
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Navbar from "./Navbar.vue";

  export default defineComponent({
    name: "Header",
    components: { Navbar },
  });
</script>
