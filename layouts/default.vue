<script setup lang="ts">
  interface Navigation {
    url: string
    label: string
  }

  const navigation: Navigation[] = [
    {
      url: '/',
      label: 'Home',
    },
    {
      url: '/secret',
      label: 'Secret',
    },
    {
      url: '/profile',
      label: 'Profile',
    },
  ]
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="mx-auto h-[var(--header-height)] flex items-center container"
    >
      <div>
        <NuxtLink to="/">
          <Icon name="logos:nuxt" size="86" />
        </NuxtLink>
      </div>
      <nav class="ml-auto flex gap-2">
        <NuxtLink
          v-for="path in navigation"
          :key="path.label"
          :to="path.url"
          class="rounded-full px-4 py-2 text-slate-800 font-500 transition-300 hover:bg-slate-100"
        >
          {{ path.label }}
        </NuxtLink>
      </nav>

      <div class="ml-10">
        <NuxtLink
          to="/"
          class="flex items-center gap-1 rounded-full bg-indigo-500 px-4 py-2 text-indigo-50 font-500 transition-300 hover:bg-indigo-600"
        >
          <Icon name="tabler:login" size="18" />
          <span>Login</span>
        </NuxtLink>
      </div>
    </header>

    <div class="relative flex-1">
      <slot />
    </div>

    <footer>Footer</footer>
  </div>
</template>

<style scoped>
  nav .router-link-active {
    @apply bg-slate-100;
  }
</style>
