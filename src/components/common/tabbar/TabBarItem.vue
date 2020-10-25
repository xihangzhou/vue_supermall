<template>
  <div class="item" @click="clickItem">
    <div v-if='!isActive' class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-icon-active">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      path:{
          type:String,
      },
      color:{
          type:String,
          default:'red'
      }
  },
  data:function(){
      return {
      }
  },
  methods:{
      clickItem:function(){
          this.isActive = this.isActive === 0 ? 1 : 0;
          this.$router.push(this.path);
      }
  },
  computed:{
      isActive(){
          return this.$route.path === this.path ? 1 : 0;
      },
      activeStyle(){
          return this.isActive ? {color:this.color} : {};
      }
  }
};
</script>

<style scoped>
.item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
.item {
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.active{
    color: red;
}
</style>