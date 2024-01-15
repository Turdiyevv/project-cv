<script setup>
import CollapceItem from "@/components/elComponents/collapceItem.vue";
</script>

<template>
  <main>
    <collapce-item>
      <template #btn-name>
        Eslatma!
      </template>
      <template #collapse-text>
        Eslatma haqida ma'lumot!
      </template>
    </collapce-item>
    <h1>
      <RouterLink to="/route">Router</RouterLink>
    </h1>
  </main>
</template>
<style scoped>
</style>