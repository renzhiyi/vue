<template>
  <div class="home">
    <div class="home-top">
      <router-link to="/first">首页</router-link>
      <router-link to="/sort">分类</router-link>
      <router-link to="/pai">排行</router-link>
      <router-link to="/shelf">书架</router-link>
    </div>
    <div class="home-main">
       <router-view></router-view>
    </div>

  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.home-top {
  width: 100%;
  height: 45px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.home-main{
  width: 100%;
}
</style>
