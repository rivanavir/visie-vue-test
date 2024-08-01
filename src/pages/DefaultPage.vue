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
      class="container max-w-screen-2xl flex-1 flex flex-col gap-y-padding-vertical-desktop-tiny md:gap-y-padding-vertical-desktop-small max-w-full text-17xl text-text-color-text-primary md:pb-padding-vertical-desktop-main py-padding-vertical-desktop-tiny md:pt-padding-vertical-desktop-small px-4 md:px-padding-horizontal-desktop-index box-border"
    >
      <div
        class="max-w-full"
      >
        <h1
          class="m-0 relative text-2xl md:text-inherit leading-[115%] font-normal font-inherit inline-block"
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
