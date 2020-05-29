<template>
  <div class="hello">
    <el-button @click="handleclick">
      点下
    </el-button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 500, leave: 800 }"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script lang="ts">
// import 'animate.css'
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  show = false;
  handleclick() {
    this.show = !this.show;
    this.$router.push("/product/list");
    // this.$emit('msgs',true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
