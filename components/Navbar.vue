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
  {
    label: 'Menu',
    icon: 'i-heroicons-clipboard-document-list',
    to: '/menu',
  },
];
</script>

<template>
  <nav class="md:my-4 md:pr-8 lg:pr-8 hidden md:block">
    <UVerticalNavigation :links="links" />
  </nav>
</template>
