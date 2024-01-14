<template>
  <div>
    <el-button @click="show = !show" style="width: 100%" class="el-button--primary">
      <slot name="btn-name"></slot>
    </el-button>

    <div style="margin-top: 20px">
      <el-collapse-transition>
        <div v-show="show" class="show_class">
          <slot name="collapse-text"></slot>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<style>
.el-button--primary{
  box-shadow: 0 0 32px #014577;
}
</style>
