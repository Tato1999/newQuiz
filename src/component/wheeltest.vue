<template>
  <div class="wheel_wrap">
    <Wheel
      ref="wheel"
      :gift="gift"
      :data="data"
      @done="done"
      :imgParams="logo"
      @click="spinTheWheel"
      style="height:300px;"
    />
  </div>
</template>

<script>
import { Wheel } from "vue3-fortune-wheel";


export default {
  components: {
    Wheel,
  },
  data() {
    return {
      gift: 1,
      animDuration: 100,
      logo: {
        width: 10,
        height: 12,
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
      },
      data: [
        {
          id: 1,
          value: "1X",
          bgColor: "#7d7db3",
          color: "#ffffff",
          gift: 1,
        },
        {
          id: 2,
          value: "1X",
          bgColor: "#ffffff",
          color: "#000000",
          gift: 1,
        },
        {
          id: 3,
          value: "2X",
          bgColor: "#c92729",
          color: "#ffffff",
          gift: 2,
        },
        {
          id: 4,
          value: "2X",
          bgColor: "#7d7db3",
          color: "#ffffff",
          gift: 2,
        },
        {
          id: 5,
          value: "5X",
          bgColor: "#ffffff",
          color: "#000000",
          gift: 5,
        },
      ],
      test:{}
    };
  },
  methods: {
    done(params) {
      this.test = params;
      console.log("test" + " " + this.test.gift)
      sessionStorage.setItem("gift", this.test.gift)
    },
    spinTheWheel() {
      this.$refs.wheel.spin();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wheel_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3vh;
}
</style>
