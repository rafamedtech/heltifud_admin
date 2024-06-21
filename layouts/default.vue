<script setup lang="ts">
import logo from '@/assets/img/logo.png';
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 lg:gap-8">
    <header class="md:w-fit w-full flex flex-col border-r p-4 lg:min-h-dvh">
      <section>
        <!-- <h1 class="text-primary text-2xl">Heltifud</h1> -->
        <figure class="w-32 rounded-xl overflow-hidden">
          <img :src="logo" alt="" />
        </figure>
        <Navbar />
      </section>
      <!-- <UIcon name="i-heroicons-queue-list" class="md:hidden" /> -->
    </header>

    <section class="w-full">
      <slot></slot>
    </section>
  </div>
</template>
