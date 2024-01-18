<template>
  <div class="header__tab">
    <div class="avatar__style">
      <el-avatar :size="66"></el-avatar>
    </div>
    <div class="flex__div">
    </div>
  </div>
</template>
<style scoped>
  .header__tab{
    justify-content: center;
    display: flex;
    height: 100%;
    width: 100%;
  }
  .avatar__style{
    padding: 4px;
    height: 75px;
    width: 75px;
    position: absolute;
    background-color: #293241;
    border-radius: 50%;
  }
  .flex__div{
    margin: 5px;
    background-color: #3b4756;
    height: 65px;
    width: 100%;
  }
</style>
