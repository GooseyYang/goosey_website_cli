<template>
  <div class="home">
    <NavBar />
    <SearchBar />
    <div class="container clear-fix">
      <Carousel />
      <Notice />
    </div>
    <div class="main">
      <div class="container clear-fix">
        <LeftList />
        <RightList />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Carousel from "@/components/Carousel.vue";
import Notice from "@/components/Notice.vue";
import LeftList from "@/components/LeftList.vue";
import RightList from "@/components/RightList.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SearchBar,
    Carousel,
    Notice,
    LeftList,
    RightList
  }
};
</script>
