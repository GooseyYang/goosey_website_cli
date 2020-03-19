<template>
  <div class="navbar__bg">
    <div class="navbar__fg">
      <div class="logo"></div>
      <ul class="navbar__list clear-fix">
        <router-link to="/" class="navbar__list__li active">首页</router-link>
        <router-link to="/" class="navbar__list__li">一本正经鹅</router-link>
        <router-link to="/" class="navbar__list__li">五彩缤纷鹅</router-link>
        <router-link to="/" class="navbar__list__li">关于鹅</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
