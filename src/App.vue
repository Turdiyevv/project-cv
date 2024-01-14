<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterView} from "vue-router";
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
    <RouterView>
      <TheWelcome/>
    </RouterView>
      <header>
        <div class="wrapper">
          <HelloWorld msg="Xush kelibsiz!"/>
        </div>
      </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
