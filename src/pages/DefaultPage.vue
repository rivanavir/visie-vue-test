<script setup lang="ts">
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
  >
    <Header />
    <main
      class="container max-w-screen-2xl flex-1 flex flex-col gap-y-12 md:gap-y-20 max-w-full text-black md:pb-28 pb-12 pt-6 md:pt-20 px-4 md:px-8 box-border"
    >
      <div
        class="max-w-full"
      >
        <h1
          class="m-0 relative text-2xl md:text-4xl leading-[115%] font-normal font-inherit block"
        >
          {{ $route.params.id }} page
        </h1>
      </div>
      <router-link :to="{ name: 'BrowseAll', params: {} }" class="text-base font-bold">
        Back to Browse All page
      </router-link>
    </main>
    <Footer />
  </div>
</template>
