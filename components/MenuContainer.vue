<script setup lang="ts">
import type { MenuOutline, MenuFromDB } from '@/types/Menu';
const { title, items } = defineProps<{ title: string; items: MenuOutline | MenuFromDB | null }>();
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl font-bold">{{ title }}</h3>

    <section class="pt-4 px-2 flex justify-center gap-4 max-w-5xl h-full">
      <section class="grid place-content-center gap-4">
        <Suspense>
          <template #fallback>
            <Icon name="svg-spinners:3-dots-bounce" size="34" class="text-primary" />
          </template>
          <template #default>
            <Tabs :items="items" />
          </template>
        </Suspense>
      </section>
    </section>
  </section>
</template>
