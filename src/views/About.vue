<template>
  <div class="about">
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  div:nth-child(1) {
    width: 200px;
    background: red;
  }
  div:nth-child(2) {
    flex: 20%;
    background: blue;
  }
  div:last-child {
    width: 200px;
    background: yellow;
  }
}
</style>
