<script setup>
import { RouterView} from "vue-router";
// import HeaderItem from "@/components/elComponents/headerItem.vue";
</script>

<template>
    <div class="main_class">
      <RouterView/>
      <footer>
        <el-button class="el-button--primary">
          <a href="https://t.me/Turdiyev07" style="color: white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
                style="width: 25px; height: 25px">
              <path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472zm256 512V657.024L512 768z">
              </path>
            </svg>
          </a>
            Contact
        </el-button>
        <el-button class="el-button--primary"  @click="$router.push('/')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
               style="width: 25px; height: 25px">
            <path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576">
            </path>
          </svg>Home
        </el-button>
        <el-button class="el-button--primary"  @click="$router.push('/route')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
              style="width: 25px; height: 25px">
            <path fill="currentColor" d="M128 896V128h768v768zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0">
            </path>
          </svg>
          Free
        </el-button>
      </footer>
    </div>
</template>

<style scoped>
.main_class{
  border-radius: 5px;
  height: 100vh;
}
footer {
  display: flex;
  justify-content: center;
}
@media (min-width: 1024px) {

  /*header, footer{*/
  /*  margin-right: 12px;*/
  /*}*/
  .main_class {
    width: 80%;
    background: transparent;
    box-shadow: black 0 0 27px 0 !important;
    backdrop-filter: blur(15px);
  }
}
</style>
