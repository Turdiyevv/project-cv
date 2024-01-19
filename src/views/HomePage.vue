<script setup>

</script>

<template>
  <header></header>
  <main>
    <div class="home_bg_img">
      <div class="dialog__class">
        <h2> Xush kelibsiz!</h2>
        <h2>Xizmatlarimiz:</h2>
        <div class="menu_view">
          <h3>Post manager</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
            class="svg">
              <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z">
          </path>
          </svg>
        </div>

        <div class="menu_view">
          <h3>Kompyuter savodxonligi</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
            class="svg">
              <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z">
          </path>
          </svg>
        </div>

        <div class="menu_view">
          <h3>Bepul rezume tayorlash</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""
            class="svg">
              <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z">
          </path>
          </svg>
        </div>

      </div>

    </div>
  </main>
</template>
<style scoped>
  .home_bg_img{
    height: 90vh;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }
  .dialog__class{
    min-height: 400px;
    min-width: 300px;
    padding: 20px;
    color: white;
    margin: auto 0;
    justify-content: center;
    border-radius: 10px;
    background-color: #293241;
    /*background: transparent;*/
    box-shadow: black 0 0 27px 0 !important;
    /*backdrop-filter: blur(15px)*/
  }
  .menu_view{
    align-items: center;
    display: flex;
    margin: 3px 0;
    padding: 0 7px;
    background-color: #293241;
    border-radius: 5px;
  }
  h3{
    margin: 5px 0;
  }
  .svg{
    margin-left: auto;
    width: 25px;
    height: 25px;
    color: green;
  }
 @media (max-width: 1024px) {
 .dialog__class {
   color: aliceblue;
   padding: 10px;
   margin: auto 10px;
    background: transparent;
    box-shadow: black 0 0 27px 0 !important;
    backdrop-filter: blur(10px)
 }
}
</style>
