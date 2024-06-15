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
  <nav class="lg:my-4 lg:pr-8 hidden lg:block">
    <UVerticalNavigation :links="links" />
  </nav>
</template>
