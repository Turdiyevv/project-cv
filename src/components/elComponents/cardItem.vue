
<template>
  <el-card class="box-card">
      <p>
        <slot name="content"></slot>
      </p>
      <el-button @click="$router.push('route')" class="el-button--primary card_btn_style">
        <slot name="btn-name"></slot>
      </el-button>
  </el-card>
</template>

<script>
// import {ref} from "vue";
  export default {
    setup(){
    //   const cardInner = ref(null)
    //   const startAnimation = () => {
    //   cardInner.value.style.transform = 'rotateY(180deg)';
    // };
    //
    // const resetAnimation = () => {
    //   cardInner.value.style.transform = 'rotateY(0deg)';
    // };
    // return{
    //   startAnimation, resetAnimation
    // }
    }
  }
</script>

<style scoped>
.box-card {
  color: antiquewhite;
  width: 100%;
  background-color: #014578;
  border: none;
  perspective: 1000px;
  //transform-style: preserve-3d;
  //transition: transform 1s ease;
  box-shadow: 0 0 32px #014577;
}

.card_btn_style{
  width: 100%;
  color: #f2f2f2 !important;
  text-decoration: none;
}
</style>
