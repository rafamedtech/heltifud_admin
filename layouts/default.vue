<template>
  <div class="flex flex-col lg:flex-row gap-4 lg:gap-8">
    <header class="lg:w-fit w-full flex flex-col border-r py-4 lg:min-h-dvh">
      <section>
        <h1 class="text-primary text-2xl">Heltifud</h1>
        <Navbar />
      </section>
      <!-- <UIcon name="i-heroicons-queue-list" class="md:hidden" /> -->
    </header>

    <section class="w-full">
      <slot></slot>
    </section>
  </div>
</template>
