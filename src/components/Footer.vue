<template>
  <footer
    class="self-stretch bg-background-color-background-secondary overflow-hidden flex flex-col items-center justify-center max-w-full text-left text-base text-background-color-background-primary pt-padding-vertical-desktop-tiny sm:pt-padding-vertical-desktop-small lg:pt-padding-vertical-desktop-main"
  >
    <div class="container max-w-full 2xl:max-w-screen-2xl px-space-medium md:px-padding-horizontal-desktop-index box-border">
      <div class="flex flex-col gap-padding-vertical-desktop-tiny lg:gap-padding-vertical-desktop-main border-box">
        <div
          class="flex-1 w-full max-w-full text-left text-sm text-text-color-text-secondary1 flex flex-col sm:flex-row sm:flex-wrap lg:grid lg:grid-cols-4 gap-grid-gap-main"
          v-for="(footerSection, idx) in footerSections" :key="idx"
          :class="idx+1 === footerSections.length ? 'border-t border-solid border-border-color-border-primary py-space-medium gap-space-extra-small' : ''"
        >
          <template v-for="section in footerSection">
            <h4 class="font-normal m-0 text-white sm:w-full" :class="`${idx+1 === footerSections.length ? 'text-sm' : 'text-base'}`">{{ section?.title }}</h4>
            <div class="flex flex-col items-start gap-y-space-extra-small sm:flex-1" v-for="(subSection, index) in section?.subSections" :key="index">
              <p v-if="subSection.columnTitle" class="text-base text-white no-underline m-0 pb-1.5">{{ subSection.columnTitle }}</p>
              <router-link :to="{ name: 'Default', params: { id: item } }" class="font-medium text-text-color-text-secondary no-underline hover:text-white" v-for="(item, index) in subSection.items" :key="index">
                {{ item }}
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
  interface SubSection {
    columnTitle?: string;
    items: string[];
  }
  interface Section {
    title: string;
    subSections: SubSection[]
  }

  const footerSections: Section[][] = [
    [
      {
        title: 'Browse all',
        subSections: [
          {
            columnTitle: 'Browse professionals',
            items: [
              'Casting Directors',
              'Content Creators',
              'Creative Directors',
              'Directors',
              'Fashion Stylists',
              'Make-up Artists',
              'Photographers',
              'Browse all professionals'
            ]
          },
          {
            columnTitle: 'Browse companies',
            items: [
              'Actor Agencies',
              'Artist Representation Agencies',
              'Casting Agencies',
              'Content Creator Agencies',
              'Equipment Hire Companies',
              'Location Agencies',
              'Model Agencies',
              'Browse all companies',
            ]
          },
          {
            columnTitle: 'Browse showcases',
            items: [
              'Adidas',
              'Artboxblack',
              'British GQ',
              'Elle Australia',
              'Esquire Australia',
              'Harper’s Bazaar Australia',
              'Time Magazine',
              'Browse all showcases',
            ]
          }
        ]
      }
    ],
    [
      {
        title: '',
        subSections: [
          {
            columnTitle: 'Platform',
            items: [
              'Pricing',
              'FAQ',
              'Report a bug',
            ]
          },
          {
            columnTitle: 'Company',
            items: [
              'News',
              'About',
              'Call sheets',
            ]
          },
          {
            columnTitle: 'Connect',
            items: [
              'Instagram',
            ]
          }
        ]
      }
    ],
    [
      {
        title: 'Visie © 2024',
        subSections: [
          {
            items: [
              'Manage Cookies',
            ]
          },
          {
            items: [
              'Terms & Conditions',
            ]
          },
          {
            items: [
              'Privacy Policy',
            ]
          },
        ]
      }
    ]
  ]
</script>
