<template>
  <div class="headerDiv">
  <div><h1>Guess The Answer!</h1></div>
  <br>
  <br>
    <img src="../assets/Settings-icon.png" style="width: 50px; height: 50px; border-radius:50px; margin:0 auto">
    <router-link to="/profile">
    <img src="../assets/login.png" style="width: 50px; height: 50px;">
    </router-link>
    <img src="../assets/top10.png" style="width: 50px; height: 50px; border-radius:50px; margin:0 auto">
  <br>
  <br>
  <br>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.headerDiv{
    background: linear-gradient(white, rgb(230, 230, 230),rgb(199, 199, 199), gray);
    border-radius: 0px 0px 25px 25px;
}


</style>