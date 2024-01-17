<script setup>
import CollapceItem from "@/components/elComponents/collapceItem.vue";
import {ref} from "vue";

const Info = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
const bg = ref(false);

</script>

<template>
  <main>
    <collapce-item @click="bg =!bg;">
      <template #btn-name>
        Eslatma!
      </template>
        <template #collapse-text>
      <el-scrollbar max-height="70vh">
        <h2>{{ Info }}</h2>
        <h1>
          <RouterLink to="/route">Router</RouterLink>
        </h1>
      </el-scrollbar>
        </template>
    </collapce-item>
    <div :hidden="bg ? true : false" class="home_bg_img">
    </div>
  </main>
</template>
<style scoped>
  .home_bg_img{
    background-color: #293241;
    height: 70vh;
    border-radius: 5px;
    background-image: url(../assets/Minimalism_Ac.gif);
    //height: 400px;
    background-position: center;
  }
  .four_zero_four_bg{
  }
  h2{
    padding: 0 5px 0 5px;
    background-color: #293241;
    border-radius: 5px;
  }
 @media (min-width: 1024px) {
 main{
   margin-left: 12px;
 }
}
</style>
