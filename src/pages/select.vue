<template>
  <Header/>
      <router-link to="/physic">
        <div class="stageBtClass" id="startStage1"><p class="buttonp">Physic</p></div>
        </router-link>
      <!--<div class="stageBtClassSecurity" id="startStage2Security" onclick="buySecondStage()"><p class="buttonp">Stage:2 coast 250 coins</p></div>-->
        <div class="stageBtClass" id="startStage2"><p class="buttonp">Biology</p></div>
      <!--<div class="stageBtClassSecurity" id="startStage3Security" onclick="buyThirdStage()"><p class="buttonp">Stage:3 coast 500 coins</p></div>-->
        <div class="stageBtClass" id="startStage3"><p class="buttonp">chemistry</p></div> 
        <router-link to="/">
        <div class="stageBtClass" id="startStage4"><p class="buttonp">Back</p></div>
        </router-link>
  <div>
      
  </div>
</template>

<script>
import Header from '../component/heade.vue'
export default {
  components: {
        Header
    }
}
</script>

<style>

*{
    text-decoration: none;
    text-underline-offset: none;
}
.stageBtClass{
    position: relative;
    width: 200px;
    height: 80px;
    line-height: 80px;
    border-radius: 20px;
    color: black;
    background-color: rgba(184, 236, 210, 0.185);
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    margin: auto;
  }

</style>