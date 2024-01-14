<script setup>
import CardItem from "@/components/elComponents/cardItem.vue";

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <card-item>
      <template #btn-name>
        <RouterLink to="/route">
          <h4>Yaratish</h4>
        </RouterLink>
      </template>
      <template #content>
        <h2>{{ msg }}</h2>
        <h4>
          Siz rezume yaratishdan oldin pastdagi hujjatlar bilan tanishib chiqing!
        </h4>
      </template>
    </card-item>
  </div>
</template>

<style scoped>

h2 {
  text-shadow: 1px 2px 2px rgba(0,0,0,0.2);
  font-size: 1.2rem;
}

.greetings h2 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h3 {
    text-align: left;
  }
  h2 {
  text-shadow: 1px 2px 2px rgba(0,0,0,0.2);
  font-size: 1.2rem;
}
}
</style>
