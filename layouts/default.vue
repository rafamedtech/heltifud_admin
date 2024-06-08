<script setup lang="ts">
const links = [
  {
    label: 'Inicio',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Recetas',
    icon: 'i-heroicons-book-open',
    to: '/recetas',
  },
  {
    label: 'Pedidos',
    icon: 'i-heroicons-clipboard-document-check',
    to: '/pedidos',
  },
];
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-4 lg:gap-8">
    <header class="lg:w-fit w-full flex flex-col border-r py-4 lg:min-h-dvh">
      <section>
        <h1 class="text-primary">Heltifud admin</h1>
        <nav class="lg:my-4 lg:pr-8 hidden lg:block">
          <UVerticalNavigation :links="links" />
        </nav>
      </section>
      <!-- <UIcon name="i-heroicons-queue-list" class="md:hidden" /> -->
    </header>

    <section class="w-full">
      <slot></slot>
    </section>
  </div>
</template>
