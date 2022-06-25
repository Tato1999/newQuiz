<template>
 <div>
   <router-view/>
  </div>
</template>

<script>

import mainpage from './pages/main.vue'
import Header from './component/heade.vue'

export default {
  name: 'App',
  components: {
    mainpage,
    Header
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
