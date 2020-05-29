<template>
  <div class="box">
    <div class="left">代表是个图</div>
    <div class="right">
      <p>这个个大大的标题，</p>
      <span
        >下边的烂七八糟11111111111111111111111111111111111111111111111111</span
      >
      <div class="btn">搞个按钮让你点点</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProductList extends Vue {
  handleclick() {
    console.log("搜索结果");
  }
}
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  width: 100%;
  height: 150px;
}

.left {
  flex-basis: 100px;
  background: #000;
  color: #ffffff;
}

.right {
  flex: 1;
  position: relative;
  text-align: right;
  min-width: 0;
}

.btn {
  border: 1px solid rebeccapurple;
  width: 100px;
  display: inline-block;
  overflow: hidden;
  margin-top: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
