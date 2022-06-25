<template>
 <div>
  <Header/>
  <router-link to="/Type">
    <div style="position: relative">
        <h1 class="start" id="start1">S</h1>
        <h1 class="start" id="start2">t</h1>
        <h1 class="start" id="start3">a</h1>
        <h1 class="start" id="start4">r</h1>
        <h1 class="start" id="start6">t</h1>
    </div>
   </router-link>
  </div>
</template>

<script>
import Header from '../component/heade.vue'
export default {
  components: {
    Header
  },
  data(){
      return
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
.start{
    position: relative;
    cursor: pointer;
    animation-name: start-first;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    display: inline-flex;
    margin: 5px;
    
  }
  #start1 {
   
    animation-timing-function: cubic-bezier(0.1,0.2,0.1,0.1);
  }
  #start2{
   
    animation-timing-function: cubic-bezier(0.1, 0.3, 0.5, 0.5);
  }
  #start3{
       animation-timing-function: cubic-bezier(0.1, 0.4, 0.9, 0.9);
  }
  #start4{
       animation-timing-function: cubic-bezier(0.1, 0.3, 0.5, 0.5);
  }
  #start5{
   
    animation-timing-function: cubic-bezier(0.1, 0.2, 0.1, 0.1);
  }

  @keyframes start-first {
    0% {
      top: 90vw;
    }
    5% {
     top: 87vw;
    }
    35% {
      top: 75vw;
    }
    70% {
      top: 95vw;
    }
    100% {
      top: 90vw;
    }
  }
</style>
