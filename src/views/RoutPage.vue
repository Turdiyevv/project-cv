
<template>
  <div class="text_label">
    <span>Rezume tayorlash uchun quyidagi kartalarni to'liq to'ldirib chiqing!</span>
  </div>
  <el-scrollbar class="temp__class">
    <el-row class="row-bg" justify="space-evenly">
      <card-item v-for="card in cards" :key="card.id">
        <template #header>{{ card.title }}</template>
        <template #card-content>kontent</template>
        <template #avatar>{{ card.id }}</template>
        <template #btn-name>
          <span @click="clickDialog">Ko'rish</span>
        </template>
      </card-item>
    </el-row>
  </el-scrollbar>

<!--  dialog1-->
  <el-dialog
    v-model="dialogVisible"
    title="Shaxsiy ma'lumotlar"
    width="90%"
    :before-close="handleClose"
  >
    <el-row>
      <div style="display: flex; width: 100%">
<!--      <el-upload-->
<!--        :on-preview="handlePreview"-->
<!--        v-model="User.fileList"-->
<!--        class="upload-demo"-->
<!--      >-->
<!--        <el-button type="primary">Su'rat yuklash</el-button>-->
<!--      </el-upload>-->
      <el-date-picker
        v-model="User.birth"
        type="date"
        placeholder="Tug'ilgan sana"
        :disabled-date="disabledDate"
        clearable
      />
        </div>
      <el-input class="class_input_margin" v-model="User.fio" placeholder="Familiya Ism Otchestvo" clearable />
      <el-input class="class_input_margin" v-model="User.family" placeholder="Oilalimi?" clearable />
      <el-input class="class_input_margin" v-model="User.address" placeholder="Yashash joyi" clearable />
      <el-input class="class_input_margin" v-model="User.addressW" placeholder="Ishlash joyi" clearable />
      <el-input class="class_input_margin" v-model="User.working" placeholder="Ish staji, mansabi" clearable />
      <el-input class="class_input_margin" v-model="User.learning" placeholder="O'quv maskani" clearable />
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog1-->

<!--  dialog2-->
  <el-dialog
    v-model="dialogContact"
    title="Kontakt ma'lumotlari"
    width="90%"
    :before-close="handleClose"
  >
    <el-row>
      <el-input class="class_input_margin" v-model="Contact.number" placeholder="Telefon raqami" clearable />
      <el-input class="class_input_margin" v-model="Contact.tme" placeholder="Telegram manzili" clearable />
      <el-input class="class_input_margin" v-model="Contact.elAddress" placeholder="Elektron pochta" clearable />
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogContact = false">Cancel</el-button>
        <el-button type="primary" @click="dialogContact = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog2-->

</template>

<script setup>
import {reactive, ref} from "vue";
import CardItem from "@/components/elComponents/cardItem.vue";
import { ElMessageBox } from 'element-plus'

const cards = ref([
  {id:1, title: 'Shaxsiy ma\'lumotlar'},
  {id:2, title: 'Kontakt ma\'lumotlar'},
  {id:3, title: 'Sertifikatlar'},
  {id:4, title: 'Tillar'},
  {id:5, title: 'Kasbiy bilim'},
  {id:6, title: 'Ish qobilyatlari'},
  {id:7, title: 'Qo\'shimcha ma\'lumotlar'},
  {id:8, title: 'Yomon odatlar'},
  {id:9, title: 'Portfolio'},
    ]);
const dialogVisible = ref(false);
const dialogContact = ref(false);

const handleClose = function (done) {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
    })
}
const disabledDate = function (time) {
  return time.getTime() > Date.now()
}

const User = reactive(
    {
      fileList: null,
      fio: '',
      birth: null,
      family: '',
      address: '',
      addressW: '',
      working: '',
      learning: '',
    }
);
const Contact = reactive(
    {
      number: '',
      tme: '',
      elAddress: '',
    }
);
const clickDialog = function(){
     this.dialogContact=true;
  // if (id===1){
  // }
  // else if(id === 2){
  //   this.dialogContact = true
  // }
  // else{
  //   this.dialogContact = true
  // }
}

// const handlePreview = function(uploadFile) {
//   console.log(uploadFile)
// }
</script>

<style scoped>
.temp__class{
  padding: 0 12px;
  height: 82vh;
}
.text_label{
  display: flex;
  justify-content: center;
  background-color: #293241;
  color: aliceblue;
  margin:7px;
  padding: 10px;
}
.class_input_margin{
  width: 100%;
  margin: 5px 0;
}
 @media (max-width: 1024px) {
   .text_label{
     margin:0 0 7px 0;
   }
 }

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
