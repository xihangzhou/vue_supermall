import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/home.vue'
import Category from 'views/category/category.vue'
import Cart from 'views/cart/cart.vue'
import Profile from 'views/profile/profile.vue'


//1.注入组件
Vue.use(VueRouter);

//2.定义路由
const routes = [
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category,
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'',
        redirect:'/home'
    }
];

//3.创建router实例
const router = new VueRouter({
    routes,
    mode:'history'
});

//4.导出router实例
export default router;

