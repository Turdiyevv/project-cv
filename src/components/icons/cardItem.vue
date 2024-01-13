
<template>
  <el-card class="card__style">
    <p>
      <slot name="content"></slot>
    </p>
  </el-card>
</template>

<style scoped>
.card__style {
  width: 300px;
  background-color: white;
}
</style>