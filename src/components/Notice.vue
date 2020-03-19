<template>
  <div class="notice">
    <ul class="notice__cate__ul clear-fix">
      <li class="notice__cate__li active">全部</li>
      <li class="notice__cate__li">前端</li>
      <li class="notice__cate__li">设计</li>
      <li class="notice__cate__li">后端</li>
    </ul>
    <ul class="notice__list">
      <router-link
        to="/"
        class="notice__line clear-fix"
        v-for="item in 6"
        :key="item"
      >
        <div class="notice__cate">[类别]</div>
        <router-link to="/" class="notice__title" title="文章标题文章标">
          文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题
        </router-link>
        <div class="notice__date">2020-03-18</div>
      </router-link>
    </ul>
    <div class="read__more">
      阅读更多
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Notice"
};
</script>
