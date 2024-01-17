<script setup>
    import { ref } from "vue";

    const pageTitle = "Rout page";

    const firsForm = ref({
      input: '',
      input1: '',
      input2: '',
    })
</script>

<template>
  <div style="color: #f2f2f2">
    <h1>{{ pageTitle }}</h1>
    <el-tabs  type="border-card" class="dark">
      <el-tab-pane label="Config">
<!--        <el-upload-->
<!--          style="height: 23px; width: 23px;"-->
<!--          class="avatar-uploader"-->
<!--          action="https://jsonplaceholder.typicode.com/posts/"-->
<!--          :show-file-list="false">-->
<!--        </el-upload>-->
        <el-input
          class="mb-3__Class"
          placeholder="Please input"
          v-model="firsForm.input"
          clearable>
        </el-input>
        <el-input
          class="mb-3__Class"
          placeholder="Please input"
          v-model="firsForm.input1"
          clearable>
        </el-input>
        <el-input
          class="mb-3__Class"
          placeholder="Please input"
          v-model="firsForm.input2"
          clearable>
        </el-input>
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
<style scoped>
.mb-3__Class{
  margin: 12px 0;
}
</style>