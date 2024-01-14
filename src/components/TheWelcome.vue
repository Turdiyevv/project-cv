<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import CollapceItem from "@/components/elComponents/collapceItem.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>
      <collapce-item>
        <template #btn-name>Tavfsilotlar</template>
        <template #collapse-text>
          <h6>
          Assalomu alaykum! biz sizga siz haqingizda to'liq ma'lumot beruvchi,
          chop etganda sifatli chiqadigan rezume tayorlab berish funksiyasini taklif qilamiz!
          </h6>
        </template>
      </collapce-item>
    </template>
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <collapce-item>
        <template #btn-name>Butun sistema </template>
        <template #collapse-text>
          <h6>
            Sisitema sizning kelajakda ishga joylashishingiz uchun asosiy kirish
            hujjati bo'lgan rezumeni tayorlashga mo'ljallangan!
          </h6>
        </template>
      </collapce-item>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      <collapce-item>
        <template #btn-name>Jamoamiz</template>
        <template #collapse-text>
          <h6>
           Biz bilan hamkorlik qilishni istaganlar shuningdek qaysidir sabab bilan
            bog'lanishni xohlovchilar uchun telegram manzilimiz manzilimiz:
            <a href="https://t.me/+GjiRNZGPNjRjOTMy">
             telegram community
            </a>
          </h6>
        </template>
      </collapce-item>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>
      <collapce-item>
        <template #btn-name>Biz bilan aloqa</template>
        <template #collapse-text>
          <h6>
            Aynan creator bilan bog'lanish uchun:
            <a href="sherbekturdiyev98@gmail.com">
              sherbekturdiyev98@gmail.com
            </a>
          </h6>
        </template>
      </collapce-item>
    </template>
  </WelcomeItem>
</template>
