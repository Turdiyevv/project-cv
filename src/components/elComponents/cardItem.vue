<template>
  <el-card class="box-card" shadow="hover">
      <div class="card-header">
        <span>
          <slot name="header"></slot>
        </span>
        <el-button class="button" text>
          <slot name="btn-name"></slot>
        </el-button>
      </div>
    <hr>
    <div>
      <slot name="card-content"></slot>
    </div>
    <hr>
    <slot name="footer"></slot>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  max-height: 50px;
  margin-bottom: 18px;
}

.box-card {
  margin: 10px 0;
  max-height: 200px;
  width: 100%;
}
</style>
