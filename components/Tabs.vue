<script setup lang="ts">
import type { MenuOutline, MenuFromDB } from '@/types/Menu';

const { items } = defineProps<{
  items: MenuOutline | MenuFromDB | null;
}>();

const tabItems = computed(() =>
  items?.dayMenus?.map((item: any) => {
    return {
      key: item.dayOfWeek,
      label: item.dayOfWeek,
      ...item,
    };
  })
);
</script>

<template>
  <UTabs :items="tabItems" class="w-full h-full">
    <template #default="{ item }">
      <span class="truncate uppercase"> {{ item.label }}</span>
    </template>

    <template #item="{ item }">
      <UCard
        class=""
        :ui="{
          base: 'min-w-[25rem] w-full max-w-[25rem] mx-auto ',
          background: 'bg-gray-900',
          rounded: 'rounded-xl',
          body: { base: 'h-full' },
        }"
      >
        <template #header>
          <h3 class="text-3xl text-center uppercase font-bold text-primary">{{ item.dayOfWeek }}</h3>
        </template>

        <section class="flex flex-col justify-center min-h-full gap-2">
          <Course label="Desayuno" :item="item.breakfast" />
          <Course label="Comida" :item="item.lunch" />
          <Course label="Cena" :item="item.dinner" />
        </section>
      </UCard>
    </template>
  </UTabs>
</template>
