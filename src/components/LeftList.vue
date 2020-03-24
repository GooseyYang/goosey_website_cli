<template>
  <div class="left__list">
    <div class="list__title">一本正经 · 鹅</div>
    <div class="list__block clear-fix" v-for="item of 6" :key="item">
      <div class="article__img"></div>
      <div class="article__details">
        <router-link to="/" class="article__title">
          标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
        </router-link>
        <div class="article__date">发布日期：2020-03-09</div>
        <div class="line">
          <hr class="line--1" />
          <hr class="line--2" />
          <hr class="line--1" />
        </div>
        <div class="article__text">
          正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
        </div>
        <ul class="article__label">
          <li class="article__label__li" v-for="item of 3" :key="item">标签</li>
        </ul>
      </div>
      <div class="active__line"></div>
    </div>
    <div class="more_article">
      阅读更多
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftList"
};
</script>
