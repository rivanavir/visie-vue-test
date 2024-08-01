<template>
  <div
    class="self-stretch flex items-center justify-between py-space-medium box-border max-w-full gap-5 text-left text-mini text-grey4 lg:flex-wrap"
  >
    <div
      class="flex flex-row items-center justify-start gap-4 md:gap-12 flex-1"
    >
      <div class="flex flex-row items-center justify-start gap-10">
        <router-link :to="{ name: 'BrowseAll', params: { }}" class="w-[70px] md:w-[96px] no-underline cursor-pointer flex gap-x-2 items-center select-none bg-transparent">
          <svg width="96" height="30" viewBox="0 0 96 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.8142 20.6174C60.8142 14.4557 56.1244 12.8052 50.9265 11.557C46.7432 10.5897 44.5943 10.1075 44.5943 8.09305C44.5943 6.48242 46.1963 5.39536 48.6192 5.39536C51.1988 5.39536 52.8412 6.64354 53.1138 8.85934H59.8767C59.6027 2.81712 54.9129 0 48.8551 0C42.6003 0 37.7542 2.69768 37.7542 8.85934C37.7542 14.8995 42.8747 16.4288 47.7211 17.5972C51.5509 18.5627 53.8194 19.0467 53.8194 21.342C53.8194 23.5161 51.5916 24.3622 49.3231 24.3622C46.0014 24.3622 44.1639 23.1537 43.8525 20.2549H36.8945C37.0509 26.6141 41.9323 29.9962 49.3509 30H49.3744C55.8171 29.9962 60.8142 26.6543 60.8142 20.6174Z" fill="black"/>
          <path d="M16.3774 29.3154L25.5615 0.523621H18.5647L14.2268 15.6244C13.6411 17.7586 12.9378 20.6973 12.9378 20.6973H12.8587C12.8587 20.6973 12.1941 17.7985 11.5697 15.6244L7.1913 0.523621H0V0.52569L9.22398 29.3154H16.3774Z" fill="black"/>
          <path d="M34.3941 0.523621H27.4766V29.3154H34.3941V0.523621Z" fill="black"/>
          <path d="M81.3333 17.1136H93.5667V11.5571H81.3333V6.40265H95.5994V0.523621H74.4158V29.3154H95.8333V23.2752H81.3333V17.1136Z" fill="black"/>
          <path d="M70.586 0.523621H63.6685V29.3154H70.586V0.523621Z" fill="black"/>
          </svg>
        </router-link>
      </div>
      <div
        class="flex-1 rounded-radius-round bg-background-color-background-secondary1 overflow-hidden flex flex-row items-center justify-start py-space-tiny pl-space-extra-small box-border gap-2 md:min-w-[216px] border border-solid transition-all"
        :class="isFocused ? 'border-text-color-text-primary md:max-w-[513px] md:min-w-[513px]' : 'border-transparent max-w-[216px]'"
      >
        <svg class="h-5 w-5 relative overflow-hidden shrink-0 min-h-5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.909 17.9243L18.3333 18.3485L19.1818 17.5L18.7575 17.0757L17.909 17.9243ZM15.1325 13.4507C14.8982 13.2164 14.5183 13.2164 14.284 13.4507C14.0497 13.6851 14.0497 14.0649 14.284 14.2993L15.1325 13.4507ZM18.7575 17.0757L15.1325 13.4507L14.284 14.2993L17.909 17.9243L18.7575 17.0757ZM16.0666 9.16667C16.0666 12.5172 13.3505 15.2333 9.99992 15.2333V16.4333C14.0132 16.4333 17.2666 13.18 17.2666 9.16667H16.0666ZM9.99992 15.2333C6.64939 15.2333 3.93325 12.5172 3.93325 9.16667H2.73325C2.73325 13.18 5.98665 16.4333 9.99992 16.4333V15.2333ZM3.93325 9.16667C3.93325 5.81614 6.64939 3.1 9.99992 3.1V1.9C5.98665 1.9 2.73325 5.1534 2.73325 9.16667H3.93325ZM9.99992 3.1C13.3505 3.1 16.0666 5.81614 16.0666 9.16667H17.2666C17.2666 5.1534 14.0132 1.9 9.99992 1.9V3.1Z" fill="#666666"/>
        </svg>

        <input
          class="flex-1 border-0 outline-0 text-sm bg-transparent h-5 flex-1 relative leading-[140%] text-text-color-text-secondary1 text-left inline-block p-0"
          :placeholder="isFocused ? 'Search for production professionals and companies' : 'Search'"
          v-model="search"
          @focus="isSerachFocused(true)"
          @blur="isSerachFocused(false)"
          type="text"
        />
      </div>
      <Button label="" color="transparent" class="lg:hidden ml-auto" :icon="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="black" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </Button>
    </div>
    <div
      class="lg:flex flex-row items-center justify-end gap-3 max-w-full hidden ml-auto"
    >
      <nav
        class="m-0 flex-1 flex flex-row items-center justify-end max-w-full whitespace-nowrap"
      >
        <Button v-for="(nav, idx) in navigations" :linkTo="nav.link" :key="idx" :label="nav.text" color="transparent" />
      </nav>
      <div
        class="h-4 w-px relative box-border border-r border-solid border-border-color-border-primary1"
      />
      <Button label="Sign in" color="transparent" />
      <Button label="Sign up" color="black" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import Button from "./Button.vue";

  interface Navigaion {
    text: string;
    link: string;
  }
  
  const navigations: Navigaion[] = [
    {
      text: 'Professionals',
      link: 'Professionals'
    },
    {
      text: 'Companies',
      link: 'Companies'
    },
    {
      text: 'Showcase',
      link: 'Showcase'
    },
    {
      text: 'News',
      link: 'News'
    },
    {
      text: 'Pricing',
      link: 'Pricing'
    }
  ]

  const search = ref('')
  const isFocused = ref(false)

  function isSerachFocused(state: boolean) {
    isFocused.value = state
  }
</script>
