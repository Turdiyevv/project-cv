<template>
  <el-card class="box-card">
      <div class="card-header">
        <span>
          <slot name="header"></slot>
        </span>
      </div>
    <hr>
    <div style="color: #014577">
      <slot name="card-content"></slot>
    </div>
    <hr>
    <div style="justify-content: space-between; display: flex; align-items: center">
      <el-avatar style="background-color: #dd9c3a">
        <slot name="avatar"></slot>
      </el-avatar>
      <el-button class="button" type="warning">
        <slot name="btn-name"></slot>
      </el-button>
    </div>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  margin: 10px 0;
  max-height: 200px;
  width: 300px;
}
</style>
