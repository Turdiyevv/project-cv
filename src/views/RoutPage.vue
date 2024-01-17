<script setup>
    const pageTitle = "Rout page";
</script>

<template>
  <div style="color: #f2f2f2">
    <h1>{{ pageTitle }}</h1>
    <el-tabs  type="border-card" class="dark">
      <el-tab-pane label="Config">
        test 1
      </el-tab-pane>
      <el-tab-pane label="Role">
        Test 2
      </el-tab-pane>
      <el-tab-pane label="Task">
        test3
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
