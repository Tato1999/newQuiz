<template>
 <div>
   <router-view/>
  </div>
</template>

<script>

import mainpage from './pages/main.vue'
import Header from './component/heade.vue'
import firebase from 'firebase'
import { computed } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    mainpage,
    Header
  },
  data(){
  
  },

  computed:{
    db(){
      return firebase.firestore()
    }
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
