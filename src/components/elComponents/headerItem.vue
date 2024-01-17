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
    display: flex;
    height: 100%;
    width: 100%;
  }
  .avatar__style{
    padding: 4px;
    display: flex;
    height: 75px;
    width: 75px;
    position: absolute;
    background-color: #293241;
    border-radius: 50%;
  }
  .flex__div{
    margin: 5px 5px 5px 15%;
    background-color: #2c3e50;
    height: 65px;
    width: 90%;
  }
</style>