<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <el-form :model="form" label-width="100px">
      <el-form-item label="账号">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handlelogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
// import { User } from "@/entity/user";
import { Vue, Component } from "vue-property-decorator";
import Authorization from "@/utils/authorization";
// import About from './About.vue'
@Component({
  components: {
    About: () => import("./About.vue")
  }
})
export default class Home extends Vue {
  form = {
    userName: "",
    password: ""
  };
  mounted() {
    console.log(process.env.VUE_APP_API_BASE_URL);
  }
  handlelogin() {
    axios.post("/designer_manager/login", this.form).then(res => {
      Authorization.save(res.data);
    });
  }
}
</script>
<style lang="scss" scoped></style>
