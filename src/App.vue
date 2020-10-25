<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
  import mainTabBar from 'components/content/mainTabBar/mainTabBar'

export default {
  name: "App",
  components: {
    mainTabBar,
  },
};
</script>

<style>
</style>
