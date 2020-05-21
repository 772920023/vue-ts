<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <el-button @click="handleclick" type="primary">点呀</el-button>
        below
      </p>
    </div>
    <hello-world msg="Welcome to Your Vue.js App"></hello-world>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { Vue } from "vue-property-decorator";
export default class App extends Vue {
  handleclick() {
    console.log("点了");
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
