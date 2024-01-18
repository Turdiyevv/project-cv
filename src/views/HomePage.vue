<script setup>
import CollapceItem from "@/components/elComponents/collapceItem.vue";
import {ref} from "vue";

const Info = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
</script>

<template>
  <main>
    <collapce-item>
      <template #btn-name>
        Eslatma!
      </template>
        <template #collapse-text>
      <el-scrollbar max-height="70vh">
        <h2>{{ Info }}</h2>
      </el-scrollbar>
        </template>
    </collapce-item>
    <div class="home_bg_img" v-show="false">
      <div class="dialog__class">
        <h1>Xush kelibsiz!</h1>
        <h1>Xizmatlarimiz:</h1>
        <h1>Post manager</h1>
        <h1>Kompyuter savodxonligi</h1>
      </div>
    </div>
  </main>
</template>
<style scoped>
  .home_bg_img{
    background-color: #293241;
    height: 70vh;
    border-radius: 5px;
    background-image: url(../assets/imgWallspic.jpg);
    //background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
  }
  .dialog__class{
    padding: 10px;
    color: white;
    width: 94%;
    height: 40%;
    margin: auto 0;
    justify-content: center;
    border-radius: 30px;
    background: transparent;
    box-shadow: black 0 0 27px 0 !important;
    backdrop-filter: blur(15px)
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
