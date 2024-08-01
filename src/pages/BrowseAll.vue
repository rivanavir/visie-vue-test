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
          Browse all
        </h1>
      </div>
      <div
        class="flex-1 w-full max-w-full text-left text-sm text-text-secondary1 flex flex-col lg:grid lg:grid-cols-4 pt-6 lg:gap-x-6 gap-y-6 md:gap-y-8 border-t border-solid border-border-primary1"
        v-for="(section, idx) in sections" :key="idx"
      >
        <h4 class="font-normal text-base m-0 text-black">{{ section?.title }}</h4>
        <div class="lg:col-span-3 relative columns-1 md:columns-3 gap-x-6 gap-y-3">
          <div class="py-1.5" v-for="(item, index) in section.items" :key="index">
            <router-link :to="{ name: 'Default', params: { id: item } }" class="font-normal text-text-secondary1 no-underline hover:text-black">
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
