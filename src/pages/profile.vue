<template>
<div id="tt">
  <img :src="this.url" style="border-radius: 100%; width:100px; height: 100px;">
</div>
<div v-if="this.profileInfo[0] != undefined">
<h1>Hello Dear {{this.profileInfo[0].name}}</h1>
<div class="lvl-point">
  <div class="lvl-poin-val1">Level: {{this.profileInfo[0].level}}</div>
  <div class="lvl-poin-val2">{{this.profileInfo[0].point}} :Point</div>
</div>
</div>
<div v-else>u arenot connected first <router-link to="/login">login</router-link></div>
<div class="buttonBtn">
<div>
  <router-link to="/type">
  <button>Back</button>
  </router-link>
</div>
<div style="margin-top: 30px">
  <button @click="logout">Logout</button>
</div>
</div>
<div class="changeBtn">
<button v-if="changeBoolIcon != true" @click="checkBtnIcon">Change Icon</button>
<input type="file" @change="uploadImage" v-else>
<button style="margin-top:30px;" @click="visibNameINput">Change Name</button>
<form>
  <input type="text" class="nameInput" id="nameId" placeholder="Type New Name..." v-model="Name">
</form>
<button class="NameBtn" v-if="this.Name != ''" @click="changeName">Change</button>
</div>
</template>

<script>

import firebase from 'firebase'
import { computed } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
export default {

data(){
  return {
    checkUpdate: false,
    changeBoolIcon:false,
    profileInfo: [],
    url:'',
    Name:'',
    refNameChange: false,
    NameInVis: null
    }
},
mounted(){
  if(localStorage.getItem('id') != undefined){
  this.db.collection('user').doc(localStorage.getItem('id')).get()
  .then((doc) => {
    console.log("done")
    this.profileInfo.push(doc.data())
    console.log(this.profileInfo[0].name)
    localStorage.setItem('point', this.profileInfo[0].point)
  })
  .catch((error) => {
    console.log(error)
  })
  return firebase.storage().ref(localStorage.getItem("id")).getDownloadURL()
  .then((url) => {
    this.url = url
    console.log(url)
    this.checkUpdate = true;
  })
  .catch((error) => {
    console.log(error.code)
  })
  }

},
methods:{
  logout(){
    localStorage.removeItem('id')
    localStorage.removeItem('point')
    location.reload()
    return {profileInfo: []}
  },
  uploadImage(e){
    let file = e.target.files[0];
    firebase.storage().ref(localStorage.getItem("id")).put(file)
    .then(() => {
      console.log('test')
      location.reload()
    })
    .catch((error) => {
      console.log(error)
    })
  },
  checkBtnIcon(){
    this.changeBoolIcon = true
  },
  changeName(){
    this.db.collection('user').doc(localStorage.getItem('id')).update({
      name: this.Name
    })
    .then(() => {
      console.log('doneeeeeeeeeee')
      location.reload()
    })
    .catch((error) => {
      console.log(error.code)
    })
  },
  visibNameINput(){
    this.NameInVis = document.getElementById("nameId")
    this.NameInVis.style.visibility = 'visible'
  }
},
computed:{
    db(){
      return firebase.firestore()
    },
}

}
</script>

<style>
.lvl-point{
  position: absolute;
  top: 30%;
  left: 5%;
  border: 2px solid #eee;
  width: 90%;
  height: 50px;
  justify-content: space-between;
  display: inline-flex;
  line-height: 50px;
};
.lvl-poin-val1{
  position: absolute;
  left: 10px;
};
.lvl-poin-val2{
  position: absolute;
  right:-10px;
}
button{
  width: 100%;
  height: 30px;
  border-radius: 10px;
}
.buttonBtn{
  width: 95%;
  position: absolute;
  top:80%;
}
.changeBtn{
  position: absolute;
  top: 65%;
   width: 95%;
}
.nameInput{
  display: flex;
  width: 95%;
  margin-top: -50%;
  height: 30px;
  visibility: hidden;
}
.NameBtn{
  position: absolute;
  display: flex;
  margin-top: -10.5%;
  left: 80%;
  width: 60px;
  height: 35px;
}

</style>