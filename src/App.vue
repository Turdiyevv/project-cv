<script setup>
import { RouterView} from "vue-router";
import HeaderItem from "@/components/elComponents/headerItem.vue";
</script>

<template>
    <header>
      <header-item/>
    </header>
    <div class="main_class">
      <RouterView/>
    </div>
    <footer>
      <el-button class="el-button--primary">
        <a href="https://t.me/Turdiyev07" style="color: white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
              style="width: 25px; height: 25px">
            <path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472zm256 512V657.024L512 768z">
            </path>
          </svg>
        </a>
      </el-button>
      <el-button class="el-button--primary"  @click="$router.push('/')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
             style="width: 25px; height: 25px">
          <path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576">
          </path>
        </svg>
      </el-button>
      <el-button class="el-button--primary"  @click="$router.push('/route')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
            style="width: 25px; height: 25px">
          <path fill="currentColor" d="M128 896V128h768v768zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0">
          </path>
        </svg>
      </el-button>
    </footer>
</template>

<style scoped>
.main_class{
   height: 80vh;
}
header, footer {
  display: flex;
  margin-bottom: 10px;
  background-color: #293241;
  border-radius: 5px;
  height: 100%;
  align-items: center;
}
.el-button--primary{
  margin: 10px auto;
}
@media (min-width: 1024px) {
  header, footer{
    margin-right: 12px;
  }
  .main_class, header, footer {
    width: 50vh;
  }
}
</style>
