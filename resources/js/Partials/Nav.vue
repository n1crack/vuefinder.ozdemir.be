<template>
  <nav class="space-y-1" aria-label="Sidebar">
    <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-gray-100' : 'text-gray-600 hover:text-emerald-600 font-bold dark:text-gray-400', 'flex items-center px-3 py-2 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
      <span class="truncate">{{ item.name }}</span>
    </a>
  </nav>
</template>

<script setup>

import { Link } from '@inertiajs/vue3';

const props = defineProps({
    current: {
        type: String,
        default: 'basic'
    }
})

const navigation = [
  { name: 'Basic', href: '/examples/basic', current: props.current === 'basic' },
  { name: 'Select Button', href: '/examples/select-button', current: props.current === 'select-button' },
  { name: 'Select Event', href: '/examples/select-event', current: props.current === 'select-event' },
  { name: 'Persist', href: '/examples/persist', current: props.current === 'persist' },
  { name: 'Features', href: '/examples/features', current: props.current === 'features' },
  { name: 'Path', href: '/examples/path', current: props.current === 'path' },
]
</script>
