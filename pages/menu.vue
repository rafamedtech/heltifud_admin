<script setup lang="ts">
import type { MenuOutline, DayMenuOutline, MenuFromDB } from '@/types/Menu';
const { downloadedMenu, currentMenu } = await useMenu();

const newMenu = reactive<MenuOutline>({
  startDate: new Date(),
  endDate: new Date(),
  dayMenus: downloadedMenu,
});

function saveMenu() {
  console.log({ newMenu, currentMenu });
}
</script>

<template>
  <main>
    <UContainer as="section" :ui="{ base: 'py-8', constrained: 'max-w-6xl' }">
      <Heading title="Actualizar menú" />

      <section class="flex w-full gap-4 justify-between mt-8">
        <MenuContainer :items="newMenu" title="Nuevo menú" />

        <UDivider
          icon="i-heroicons-arrows-right-left"
          orientation="vertical"
          :ui="{ icon: { base: 'text-primary w-10 h-10' } }"
        />

        <MenuContainer :items="currentMenu" title="Menú actual" />
      </section>

      <section class="flex gap-2 justify-center pt-16">
        <UButton label="Subir menú" size="lg" icon="i-heroicons-cloud-arrow-up" @click="saveMenu" />
      </section>
    </UContainer>
  </main>
</template>
