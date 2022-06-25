<template>
    <Header/>
    <router-link to="/stage">
        <div class="stageBtClass" id="startStage1"><p class="buttonp">Physic - Stage:1</p></div>
        </router-link>
    <div style="position:relative;" class="stageBtClassSecurity">
        <div class="stageBtClassSecurity" id="startStage2Security" onclick="buySecondStage()"><p class="buttonp">Stage:2 coast 250 coins</p></div>
        <div class="stageBtClass" id="startStage2"><p class="buttonp">Physic - Stage:2</p></div>
    </div>
    <div style="position:relative;" class="stageBtClassSecurity">    
        <div class="stageBtClassSecurity" id="startStage3Security" onclick="buyThirdStage()"><p class="buttonp">Stage:3 coast 500 coins</p></div>
        <div class="stageBtClass" id="startStage3"><p class="buttonp">Physic - Stage3</p></div>
    </div>
    <router-link to="/type">
        <div class="stageBtClass" id="startStage4"><p class="buttonp">Back</p></div>
    </router-link>
</template>

<script>
import Header from '../component/heade.vue'
export default {
    components: {
        Header
    }
}
</script>

<style scoped>


#startStage2{
    visibility: hidden;
}
#startStage3{
    visibility: hidden;
}
.stageBtClassSecurity{
    position: absolute;
    width: 200px;
    height: 80px;
    line-height: 80px;
    margin: auto;
    border-radius: 20px;
    color: black;
    background-color: rgba(184, 236, 210, 0.185);
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
  }

</style>