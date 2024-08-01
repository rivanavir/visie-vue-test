<template>
  <div
    class="flex flex-col min-h-screen"
  >
    <Header />
    <main
      class="container max-w-screen-2xl flex-1 flex flex-col gap-y-12 md:gap-y-padding-vertical-desktop-small max-w-full text-17xl text-text-color-text-primary md:pb-padding-vertical-desktop-main pb-12 pt-6 md:pt-padding-vertical-desktop-small px-4 md:px-padding-horizontal-desktop-index box-border"
    >
      <div
        class="max-w-full"
      >
        <h1
          class="m-0 relative text-2xl md:text-inherit leading-[115%] font-normal font-inherit block"
        >
          Browse all
        </h1>
      </div>
      <div
        class="flex-1 w-full max-w-full text-left text-sm text-text-color-text-secondary1 flex flex-col lg:grid lg:grid-cols-4 pt-space-medium lg:gap-x-grid-gap-main gap-y-grid-gap-main md:gap-y-padding-horizontal-desktop-main border-t border-solid border-border-color-border-primary1"
        v-for="(section, idx) in sections" :key="idx"
      >
        <h4 class="font-normal text-base m-0 text-text-color-text-primary">{{ section?.title }}</h4>
        <div class="lg:col-span-3 relative columns-1 md:columns-3 gap-x-grid-gap-main gap-y-space-extra-small">
          <div class="py-1.5" v-for="(item, index) in section.items" :key="index">
            <router-link :to="{ name: 'Default', params: { id: item } }" class="font-normal text-text-color-text-secondary1 no-underline hover:text-text-color-text-primary">
              {{ item }}
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  interface MainLink {
    text: string;
    href: string;
  }
  interface Section {
    title: string;
    mainLink?: MainLink;
    items: string[];
  }

  const sections: Section[] = [
    {
      title: 'All professions',
      items: [
        'AI Creators',
        'Casting Directors',
        'Cinematographers',
        'Colourists',
        'Content Creators',
        'Creative Directors',
        'Digital Operators',
        'Directors',
        'Directors of Photography',
        'Editors',
        'Fashion Stylists',
        'Food Stylists',
        'Hair Stylists',
        'Illustrators',
        'Interior Stylists',
        'Make-up Artists',
        'Manicurists',
        'Mixed Media Artists',
        'Nurses',
        'Photographers',
        'Producers',
        'Prop Stylists',
        'Retouchers',
        'Set Designers',
        'Videographers',
      ]
    },
    {
      title: 'All companies',
      items: [
        'AI Creators',
        'Casting Directors',
        'Cinematographers',
        'Colourists',
        'Content Creators',
        'Creative Directors',
        'Digital Operators',
        'Directors',
        'Directors of Photography',
        'Editors',
        'Fashion Stylists',
        'Food Stylists',
        'Hair Stylists',
        'Illustrators',
        'Interior Stylists',
        'Make-up Artists',
        'Manicurists',
        'Mixed Media Artists',
        'Nurses',
        'Photographers',
        'Producers',
        'Prop Stylists',
        'Retouchers',
        'Set Designers',
        'Videographers',
      ]
    },
    {
      title: 'All showcases',
      items: [
        'Vogue',
        'Casting Directors',
        'Cinematographers',
        'Colourists',
        'Content Creators',
        'Creative Directors',
        'Digital Operators',
        'Directors',
        'Directors of Photography',
        'Editors',
        'Fashion Stylists',
        'Food Stylists',
        'Hair Stylists',
        'Illustrators',
        'Interior Stylists',
        'Make-up Artists',
        'Manicurists',
        'Mixed Media Artists',
        'Nurses',
        'Photographers',
        'Producers',
        'Prop Stylists',
        'Retouchers',
        'Set Designers',
        'Videographers',
      ]
    }
  ]
</script>
