<script setup>
import { RouterView} from "vue-router";
</script>

<template>
    <header>
      <h1>this is header</h1>
    </header>
    <RouterView/>
    <footer>
      <h1>this is footer</h1>
    </footer>
</template>

<style scoped>
header, footer {
  margin-bottom: 10px;
  background-color: #293241;
  border-radius: 5px;
  padding: 5px;
}

@media (min-width: 1024px) {
}
</style>
