<template>
  <div class="home">
    <NavBar />
    <SearchBar />
    <div class="container clear-fix">
      <Carousel />
      <Notice />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Carousel from "@/components/Carousel.vue";
import Notice from "@/components/Notice.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SearchBar,
    Carousel,
    Notice
  }
};
</script>
