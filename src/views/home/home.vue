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
import homeRequest from "network/home.js"
export default {
  name: "home",
  components: {
    NavBar,
  },
  data:function(){
      return {
          banner:[],
          recommend:[]
      }
  },
  created:function(){
      homeRequest().then((res)=>{
          console.log(res);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
      })
  }
};
</script>

<style>
.home-nav{
    background-color: pink;
    color: white;
}
</style>