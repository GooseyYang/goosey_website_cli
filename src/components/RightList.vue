<template>
  <div class="right__list">
    <div class="list__title">五彩缤纷 · 鹅</div>
    <ul class="photo__ul">
      <router-link
        to="/"
        v-for="(item, index) of 5"
        :key="index"
        @mouseover.native="hoverItem(index)"
        @mouseout.native="activeIndex = -1"
        class="photo_li"
      >
        <div
          class="photo__title"
          :class="{ 'photo__title--hover': activeIndex === index }"
        >
          图片标题
          {{ index }}
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RightList",
  data() {
    return {
      activeIndex: -1
    };
  },
  methods: {
    hoverItem(index) {
      this.activeIndex = index;
    }
  }
};
</script>
