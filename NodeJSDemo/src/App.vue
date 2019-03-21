<template>
  <div id="app">
    <router-view />
    <Footer :menulist='footerList'></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  data(){
    return {
      goBack: false,
      footerList: [
          {
              value: 'home',
              label: '首页',
              icon: ''
          },
          {
              value: 'plan',
              label: '计划',
              icon: ''
          },
          {
              value: 'inform',
              label: '信息',
              icon: ''
          },
          {
              linkName: "login1",
              value: 'login',
              label: '登陆',
              icon: ''
          },
          {
              linkName: "test",
              value: 'test',
              label: '测试用',
              icon: ''
          }
      ]
    }
  },
  name: 'app'
}
</script>

<style lang='less'>
  @import './less/global.less';
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.viewBox {
  padding: 50px 0;
}
</style>
