<template>
  <div id="home">
    <nav-bar class='home-nav'>
      <template v-slot:mid>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "home",
  components: {
    NavBar,
  },
};
</script>

<style>
.home-nav{
    background-color: pink;
    color: white;
}
</style>