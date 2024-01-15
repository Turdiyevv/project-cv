<template>
  <div>
    <el-button class="button_item">
      <h3>
        <slot name="btn-text"></slot>
      </h3>
    </el-button>
  </div>
</template>
<style scoped>
 .button_item{
   background-color: #293241;
 }
</style>