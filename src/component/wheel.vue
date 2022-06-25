<template>
   <div class="wheel-wrapper">
    <div class="test"></div>
    <div
      class="wheel-pointer"
      @click="onClickRotate"
    >
      Start
    </div>
    <div
      class="wheel-bg"
      :class="{freeze: freeze}"
      :style="`transform: rotate(${wheelDeg}deg)`"
    >
      <div class="prize-list">
        <div
          class="prize-item-wrapper"
          v-for="(item,index) in prizeList"
          :key="index"
        >
          <div
            class="prize-item"
            :style="`transform: rotate(${(360/ prizeList.length) * index}deg)`"
          >
            <div class="prize-name">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
   
  },
   data() {
    return {
      freeze: false,
      rolling: false,
      wheelDeg: 0,
      prizeNumber: 8,
      prizeListOrigin: [
        {
          icon: "https://picsum.photos/40?random=1",
          name: "5X",
          value: 5
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "4X",
          value: 4
        },
        {
          icon: "https://picsum.photos/40?random=2",
          name: "3X",
          value: 3
        },
        {
          icon: "https://picsum.photos/40?random=3",
          name: "2X",
          value: 2
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "2X",
          value: 2
        },
        {
          icon: "https://picsum.photos/40?random=4",
          name: "1X",
          value: 1
        },
        {
          icon: "https://picsum.photos/40?random=5",
          name: "1X",
          value: 1
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "1X",
          value: 1
        }
      ]
    };
  },
  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber);
    }
  },
  methods: {
    onClickRotate() {
      if (this.rolling) {
        return;
      }
      const result = Math.floor(Math.random() * this.prizeList.length);
      this.roll(result);
    },
    roll(result) {
      this.rolling = true;
      const { wheelDeg, prizeList } = this;
      this.wheelDeg =
        wheelDeg -
        wheelDeg % 360 +
        6 * 360 +
        (360 - 360 / prizeList.length * result);
      setTimeout(() => {
       sessionStorage.setItem('gift', prizeList[result].value)
        console.log("Result：" + prizeList[result].value);
      }, 4500);
    }
  },
  watch: {
    prizeNumber() {
      this.freeze = true;
      this.wheelDeg = 0;

      setTimeout(() => {
        this.freeze = false;
      }, 0);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.test{
    position: absolute;
    width: 7px;
    height: 25px;
    background: rgb(212, 64, 64);
    left: 48%;
    top: 8vh;
    z-index: 1;
    border-radius: 80% 80% 0px 0px;
}

.wheel-wrapper {
  width: 200px;
  height: 200px;
  position: relative;
  top: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wheel-pointer {
  width: 60px;
  height: 60px;
  border-radius: 1000px;
  background: yellow;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 60px;
  z-index: 10;
  cursor: pointer;
}
  
.wheel-bg {
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  overflow: hidden;
  transition: transform 4s ease-in-out;
  background: #7eef97;
}
  .freeze {
    transition: none;
    background: red;
  }


.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
}

.prize-item-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
}

.prize-item {
  width: 100%;
  height: 100%;
  transform-origin: bottom;
}
  .prize-name {
    padding: 5px 0;
  }

</style>
