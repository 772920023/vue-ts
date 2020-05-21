/**
 * 读取componetns下（含子目录）的vue文件并自动注册全局组件
 * 组件名为子目录名+组件名的 kabab case，例：a/b/FooSoo.vue -> a-b-foo-soo
 */
import Vue from "vue";
import lodash from "lodash";

const requireComponent = require.context("./components", true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  // kabab case component name, contain path name
  const componentName = lodash.kebabCase(
    // remove file suffix .vue
    fileName
      .replace(/^\.\//, "")
      .replace(/\.vue/, "")
      // replace path separator '/' to ' '
      .replace(new RegExp("/", "g"), " ")
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
