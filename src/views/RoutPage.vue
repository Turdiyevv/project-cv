<script setup>
    // import { ref } from "vue";
import CardItem from "@/components/elComponents/cardItem.vue";


</script>

<template>
  <el-scrollbar class="temp__class">
    <card-item>
      <template #header>Shaxsiy ma'lumotlar</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content></template>
      <template #footer></template>
    </card-item>
    <card-item>
      <template #header>Kontakt ma'lumotlar</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
    <card-item>
      <template #header>Sertifikatlar</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
    <card-item>
      <template #header>Tillar</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
    <card-item>
      <template #header>Kasbiy bilim</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
    <card-item>
      <template #header>Ish qobilyatlari</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
    <card-item>
      <template #header>Qo'shimcha ma'lumotlar</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
    <card-item>
      <template #header>Yomon odatlar</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
    <card-item>
      <template #header>Portfolio</template>
      <template #btn-name>Ko'rish</template>
      <template #card-content>kontent</template>
      <template #footer>footer</template>
    </card-item>
  </el-scrollbar>
</template>
<style scoped>
.temp__class{
  height: 79vh;
}
</style>
