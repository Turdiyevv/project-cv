<template>
  <div class="text_label">
    <span>Rezume tayorlash uchun quyidagi kartalarni to'liq to'ldirib chiqing!</span>
  </div>
  <el-scrollbar class="temp__class">
    <el-row justify="space-evenly">
      <card-item v-for="card in cards" :key="card.id">
        <template #header>{{ card.title }}</template>
        <template #card-content>kontent</template>
          <template #avatar>{{ card.id }}</template>
          <template #btn-name>
            <span @click="clickDialog(card.id)">Ko'rish</span>
          </template>
      </card-item>
    </el-row>
  </el-scrollbar>

<!--  dialog1-->
  <el-dialog
    v-model="dialogVisible"
    title="Shaxsiy ma'lumotlar"
    :before-close="handleClose"
    width="90%"
    class="dialog-component"
  >
    <el-row :gutter="24">
      <el-col :xs="24" :sm="12" :md="8">
          <el-button v-model="User.fileList" type="success" style="margin-right: 7px">
            <div>su'rat o'rni</div>
        <input
            type="file" name="img" accept="image/*" title="su'rat"
            style="width: 100%; margin-left: 5px"
        >
          </el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <label>Tug'ilgan sana</label>
        <el-date-picker
          v-model="User.birth"
          type="date"
          placeholder="Tug'ilgan sana"
          :disabled-date="disabledDate"
          clearable
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <label>FIO</label>
        <el-input class="class_input_margin" v-model="User.fio" placeholder="Familiya Ism Otasining ismi" clearable />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <div style="display: flex; align-items: center">
          <span>Oila qurmagan</span>
          <el-switch
            v-model="User.family"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin: 0 10px"
          />
          <span>Oilali</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <label>Ro'yxatga olingan yashash manzili</label>
        <el-input class="class_input_margin" v-model="User.address" placeholder="Viloyat, Tuman, Shahar" clearable />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <label>Ishlash joyi</label>
        <el-input cl  ass="class_input_margin" v-model="User.addressW" placeholder="Qayerda ishlamoqchisiz?" clearable />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <label>Ish staji</label>
        <el-input class="class_input_margin" v-model="User.working" placeholder="Ish staji, mansabi" clearable />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <label>O'quv muassasasi</label>
        <el-input class="class_input_margin" v-model="User.learning" placeholder="Tugatgan o'quv muassasasi" clearable />
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogVisible= false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogVisible = false">{{ Confirm }}</el-button>
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
    class="dialog-component"
  >
    <el-row :gutter="24">
      <el-col :xs="24" :sm="12" :md="6" :lg="8">
        <label>Telefon raqam</label>
        <MaskInput mask="(##) ###-##-##" class="class_input_margin" v-model="Contact.number"
                   placeholder="(99) 999-99-99">
        </MaskInput>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="8">
        <label>Telegram manzil</label>
        <el-input class="class_input_margin" v-model="Contact.tme" placeholder="@Falonchiyev" clearable />
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="8">
        <label>Elektron pochta</label>
        <el-input class="class_input_margin" v-model="Contact.elAddress" placeholder="falonchiyev@gmail.com" clearable />
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogContact= false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogContact = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog2-->

<!--  dialog3-->
  <el-dialog
    v-model="dialogCertification"
    title="Sertifikatlar"
    width="90%"
    :before-close="handleClose"
    class="dialog-component"
  >
    <el-row :gutter="24">
      <el-col :xs="24" :sm="12" :md="6" :lg="8">
        <label>O'quv markaz nomi</label>
        <el-input class="class_input_margin" v-model="Sertf.name" placeholder="O'qish joyi" clearable />
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="8">
        <label>Ixtisoslashuv</label>
        <el-input class="class_input_margin" v-model="Sertf.specialization" placeholder="Ixtisoslashuv" clearable />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8">
        <label>Olgan vaqti</label>
        <p></p>
        <div style="display: flex; width: 100%">
          <el-date-picker
              style=" height: min-content;"
            v-model="Sertf.date"
            type="date"
            placeholder="Vaqti"
            :disabled-date="disabledDate"
            clearable
          />
          <el-button type="success" style="margin-left: 4px"
            @click="addSertificate(item.id)"
          >Qo'shish</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24" v-for="item in sertList" :key="item.id">
      <el-col :xs="2" :sm="2" :md="2" :lg="2">
        <h5>№</h5>
        <h6>{{item.id}}</h6>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="7">
        <h5>Nomi</h5>
        <h6>{{item.name}}</h6>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="7">
        <h5>Ixtisos</h5>
        <h6>{{item.specialization}}</h6>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="7">
        <h5>Davr</h5>
        <h6>{{item.date}}</h6>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogCertification= false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogCertification = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog3-->

<!--  dialog4-->
  <el-dialog
    v-model="dialogLang"
    title="Tillar"
    width="90%"
    :before-close="handleClose"
    class="dialog-component"
  >
    <el-row :gutter="24">
      <el-col :xs="24" :sm="12" :md="8" :lg="12" style="margin-bottom: 5px">
        <label> Til nomi</label>
        <el-input class="class_input_margin" v-model="Lang.name" placeholder="Til nomi" clearable />
      </el-col>
      <el-col :xs="24" :sm="6" :md="8" :lg="4" style="margin-bottom: 5px">
        <div>
          <label>Yozish sifati</label>
        </div>
        <el-button type="primary" style="margin: 7px 0" @click="nextWr">Sifat</el-button>
        <el-steps :active="active" finish-status="success">
          <el-step title="1"/>
          <el-step title="2"/>
          <el-step title="3"/>
          <el-step title="4"/>
          <el-step title="5"/>
        </el-steps>
      </el-col>
        <p></p>
      <el-col :xs="24" :sm="6" :md="8" :lg="4" style="margin-bottom: 5px">
        <div>
          <label>Gapirish sfati</label>
        </div>
        <el-button type="primary" style="margin: 7px 0" @click="nextSp">Sifat</el-button>
        <el-steps :active="activeSp" finish-status="success">
          <el-step title="1" />
          <el-step title="2" />
          <el-step title="3" />
          <el-step title="4" />
          <el-step title="5" />
        </el-steps>
      </el-col>
        <p></p>
      <el-col :xs="24" :sm="6" :md="8" :lg="4" style="margin-bottom: 5px">
        <div>
          <label>O'qish sifati</label>
        </div>
        <el-button type="primary" style="margin: 7px 0" @click="nextRd">Sifat</el-button>
        <el-steps :active="activeRd" finish-status="success">
          <el-step title="1" />
          <el-step title="2" />
          <el-step title="3" />
          <el-step title="4" />
          <el-step title="5" />
        </el-steps>
      </el-col>
        <p></p>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="success">Qo'shish</el-button>
        <el-button type="danger" @click="dialogLang= false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogLang = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog4-->

<!--  dialog5-->
  <el-dialog
    v-model="dialogProf"
    title="Kasbiy bilim"
    width="90%"
    :before-close="handleClose"
    class="dialog-component"
  >
    <el-row :gutter="24">
      <el-col :xs="24" :sm="8" :md="8" :lg="6">
        <label>Kasbiy yo'nalish</label>
        <el-input class="class_input_margin" v-model="Prof.name" placeholder="Kasbiy yo'nalish nomi" clearable />
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="18">
        <label>Batafsil</label>
        <el-input class="class_input_margin"
                v-model="Prof.desc"
                show-word-limit
                type="textarea"
                 placeholder="Batafsil"
                 clearable
        />
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogProf= false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogProf = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog5-->

<!--  dialog6-->
  <el-dialog
    v-model="dialogCapacity"
    title="Ish qobilyatlari"
    width="90%"
    :before-close="handleClose"
    class="dialog-component"
  >
    <el-row :gutter="24">
      <el-col :xs="24" :sm="8" :md="8" :lg="6">
        <label>Ish qobilyati nomi</label>
        <el-input class="class_input_margin" v-model="Capacity.name" placeholder="Ish qobilyatlari nomi" clearable />
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="18">
        <label>Batafsil</label>
        <el-input class="class_input_margin"
                  v-model="Capacity.desc"
                show-word-limit
                type="textarea"
                 placeholder="Batafsil"
                 clearable
        />
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogCapacity= false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogCapacity = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog6-->

<!--  dialog7-->
  <el-dialog
    v-model="dialogAdditional"
    title="Qo'shimcha ma'lumotlar, qiziqish va hobbiylari!"
    width="90%"
    :before-close="handleClose"
    class="dialog-component"
  >
    <el-row :gutter="24">
      <el-col :xs="24" :sm="8" :md="8" :lg="6">
        <label>Sifatlari</label>
        <el-input class="class_input_margin" v-model="Additional.adjectives" placeholder="Sifatlari" clearable />
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8">
        <label>Qiziqishlari</label>
        <el-input class="class_input_margin" v-model="Additional.interes" placeholder="Qiziqishlari" clearable />
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8">
        <label>Hobbylari</label>
        <el-input class="class_input_margin" v-model="Additional.hobbys" placeholder="Qiziqishlari" clearable />
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogAdditional = false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogAdditional  = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog7-->

<!--  dialog8-->
  <el-dialog
    v-model="dialogBad"
    title="Yomon odatlari!"
    width="90%"
    :before-close="handleClose"
    class="dialog-component"
  >
    <el-row>
      <el-col :xs="24" :sm="8" :md="8">
        <div style="display: flex; align-items: center">
          <span>Chekish</span>
          <el-switch
            v-model="Bad.smoking"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin: 0 10px"
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div style="display: flex; align-items: center">
          <span>Alkogol</span>
          <el-switch
            v-model="Bad.alcogole"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin: 0 10px"
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div style="display: flex; align-items: center">
          <span>Boshqa</span>
          <el-switch
            v-model="Bad.other"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin: 0 10px"
          />
        </div>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogBad = false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogBad  = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog8-->

<!--  dialog9-->
  <el-dialog
    v-model="dialogPortfolio"
    title="Portfolio (Kasbi bo'yicha qilgan ishlari)"
    width="90%"
    :before-close="handleClose"
    class="dialog-component"
  >
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8">
        <label>Portfolio</label>
        <el-input class="class_input_margin"
                 v-model="Portfolio.first"
                show-word-limit
                type="textarea"
                 placeholder="Qilgan ishlari"
                 clearable
        />
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="dialogPortfolio = false">{{ Cancel }}</el-button>
        <el-button type="primary" @click="dialogPortfolio  = false">{{ Confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
<!--  dialog9-->

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
const dialogCertification = ref(false);
const dialogLang = ref(false);
const dialogProf = ref(false);
const dialogCapacity = ref(false);
const dialogAdditional = ref(false);
const dialogBad = ref(false);
const dialogPortfolio = ref(false);

const active = ref(0);
const activeSp = ref(0);
const activeRd = ref(0);

const sertList = ref([
  {
    id: null,
    name: '',
    specialization: '',
    date: null,
  }
])

const Cancel = 'Ortga';
const Confirm = 'Tasdiqlash';

const handleClose = function (done) {
  ElMessageBox.confirm('Dialogni yopishga aminmisiz ?')
    .then(() => {
      done()
    })
    .catch(() => {
    })
}
const disabledDate = function (time) {
  return time.getTime() > Date.now()
}
const nextWr = function(){
  if (active.value++ > 4) active.value = 0;
  Lang.write = active.value;
}
const nextSp = function(){
  if (activeSp.value++ > 4) activeSp.value = 0;
  Lang.speak = activeSp.value;
}
const nextRd = function(){
  if (activeRd.value++ > 4) activeRd.value = 0;
  Lang.read = activeRd.value;
}



// dialogies
const User = reactive(
    {
      fileList: null,
      birth: null,
      fio: '',
      family: false,
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
const Sertf = reactive(
    {
      name: '',
      specialization: '',
      date: null,
    }
);
const Lang = reactive(
    {
      name: '',
      write: null,
      speak: null,
      read: null,
    }
);
const Prof = reactive(
    {
      name: '',
      desc: '',
    }
);
const Capacity = reactive(
    {
      name: '',
      desc: '',
    }
);
const Additional = reactive(
    {
      adjectives: '',
      interes: '',
      hobbys: '',
    }
);
const Bad = reactive(
    {
      smoking: false,
      alcogole: false,
      other: false,
    }
);
const Portfolio = reactive(
    {
      first: '',
    }
);
// dialogies

const clickDialog = function(id){
  if (id===1){
    dialogVisible.value = true;
  }
  else if(id === 2){
    dialogContact.value = true;
  }
  else if(id === 3){
    dialogCertification.value = true;
  }
  else if(id === 4){
    dialogLang.value = true;
  }
  else if(id === 5){
    dialogProf.value = true;
  }
  else if(id === 6){
    dialogCapacity.value = true;
  }
  else if(id === 7){
    dialogAdditional.value = true;
  }
  else if(id === 8){
    dialogBad.value = true;
  }
  else if(id === 9){
    dialogPortfolio.value = true;
  }
  else {
    alert('is not dialog number!')
  }
}
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
@media (min-width: 816px) {
  .dialog-component {
    width: 30% !important;
  }
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
