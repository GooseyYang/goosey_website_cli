<template>
  <div class="home">
    <NavBar />
    <SearchBar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SearchBar
  }
};
</script>
