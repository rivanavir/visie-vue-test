<template>
  <header
    class="container max-w-full 2xl:max-w-screen-2xl px-padding-horizontal-desktop-index self-stretch bg-background-color-background-primary flex flex-col items-start justify-start max-w-full text-left text-xs text-dimgray font-roboto box-border"
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
