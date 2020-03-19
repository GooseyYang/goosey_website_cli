<template>
  <el-carousel class="carousel">
    <el-carousel-item v-for="item in 1" :key="item">
      <route-link to="/" class="small">{{ item }}</route-link>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
.carousel {
  float: left;
  width: 38.125rem;
  height: 16.875rem;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
