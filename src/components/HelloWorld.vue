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
        <h5>Yaratish</h5>
      </template>
      <template #content>
        <h3>{{ msg }}</h3>
        <h6>
          Siz rezume yaratishdan oldin pastdagi hujjatlar bilan tanishib chiqing!
        </h6>
      </template>
    </card-item>
  </div>
</template>

<style scoped>

h3 {
  text-shadow: 1px 2px 2px rgba(0,0,0,0.2);
  font-size: 1.2rem;
}

.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h3 {
    text-align: left;
  }
}
</style>
