import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import DetailProduct from "@/views/DetailProduct.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Cart from "@/views/Cart.vue";
import Order from "@/views/Order.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import OrderSuccess from "@/views/OrderSuccess.vue";
import UserProfile from "@/views/UserProfile.vue";
import DetailOrder from "@/views/DetailOrder.vue";
import ChangeUserProfile from "@/views/ChangeUserProfile.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import SearchProduct from "@/views/SearchProduct.vue";
import News from "@/views/News.vue";
import Contact from "@/views/Contact.vue";
import AdminProductCategory from "@/views/AdminProductCategory.vue";
import AdminHeader from "../components/AdminHeader.vue";
import AdminFooter from "../components/AdminFooter.vue";
import AdminAddProductCategory from "../views/AdminAddProductCategory.vue";
import UpdateProductCategory from "../views/UpdateProductCategory.vue";
import AdminProduct from "../views/AdminProduct.vue";
import AdminAddProduct from "../views/AdminAddProduct.vue";
import UpdateProduct from "../views/UpdateProduct.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        components:{
            default:HomePage,
            footer: Footer,
            header: Header,
        },
    },
    {
        path: "/about",
        name: "About",
        components:{
            default: About,
            footer: Footer,
            header: Header,
        },
    },
    {
        path: "/product/:type",
        name: "Product",
        // component: Product,
        components:{
            default: Product,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/detail/:id",
        name: "DetailProduct",
        components:{
            default: DetailProduct,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/register",
        name: "Register",
        components:{
            default: Register,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/login",
        name: "Login",
        components:{
            default: Login,
            footer: Footer,
            header: Header,
        }
    },
    {
        path: "/cart",
        name: "Cart",
        components:{
            default: Cart,
            footer: Footer,
            header: Header,
        }
    },
    { //C???n b???o v??? route
        path: "/order",
        name: "Order",
        components:{
            default: Order,
            footer: Footer,
            header: Header,
        }, 
        // beforeEnter: (to, from, next) => {
        //     const UserInfo = JSON.parse(localStorage.getItem("UserLogin"));
        //     const Cart = JSON.parse(localStorage.getItem("Cart"));
        //     if(UserInfo == null){
        //         alert("B???n ph???i ????ng nh???p ????? ti???n h??nh ?????t h??ng");
        //         return false;   
        //     }
        //     if(Cart == null || Cart.length == 0){
        //         alert("B???n ch??a c?? s???n ph???m trong gi??? h??ng");
        //         return false;
        //     }else{
        //         next();
        //     }
        // }
    },
    {//C???n b???o v??? route
        path: "/ordersuccess",
        name: "OrderSuccess",
        components:{
            default: OrderSuccess,
            header: Header,
            footer: Footer,
        } 
    },
    {//C???n b???o v??? route
        path: "/userprofile",
        name: "UserProfile",
        components:{
            default: UserProfile,
            header: Header,
            footer: Footer,
        }
    },
    {//C???n b???o v??? route
        path: "/detailorder/:id",
        name: "DetailOrder",
        components:{
            default: DetailOrder,
            header: Header,
            footer: Footer,
        }
    },
    {//C???n b???o v??? route
        path: "/changeuserprofile",
        name: "ChangeUserProfile",
        components:{
            default: ChangeUserProfile,
            header: Header,
            footer: Footer,
        }
    },
    {//C???n b???o v??? route
        path: "/changepassword",
        name: "ChangePassword",
        components:{
            default: ChangePassword,
            header: Header,
            footer: Footer,
        }
    },
    {
        path: "/searchproduct",
        name: "SearchProduct",
        components:{
            default: SearchProduct,
            header: Header,
            footer: Footer,
        }
    },
    {
        path: "/news",
        name: "News",
        components:{
            default: News,
            header: Header,
            footer: Footer, 
        }
    },
    {
        path: "/contact",
        name: "Contact",
        components:{
            default: Contact,
            header: Header,
            footer: Footer,
        }
    },
    {//c???n b???o v??? ???????ng d???n (ch??a b???o v???)
        path: "/admin/product_category",
        name: "AdminProductCategory",
        components:{
            default: AdminProductCategory,
            // header: AdminHeader,
            // footer: AdminFooter,
        }
    },
    {//c???n b???o v??? ???????ng d???n (ch??a b???o v???)
        path: "/admin/add_product_category",
        name: "AddProductCategory",
        component: AdminAddProductCategory,
    },
    {//c???n b???o v??? ???????ng d???n (ch??a b???o v???)
        path: "/admin/update_product_category/:number_type",
        name: "UpdateProductCategory",
        component: UpdateProductCategory,
    },
    {//c???n b???o v??? ???????ng d???n (ch??a b???o v???)
        path: "/admin/product",
        name: "AdminProduct",
        component: AdminProduct,
    },
    {//c???n b???o v??? ???????ng d???n (ch??a b???o v???)
        path: "/admin/add_product",
        name: "AddProduct",
        component: AdminAddProduct,
    },
    {
        path: "/admin/update_product/:id",
        name: "UpdateProduct",
        component: UpdateProduct,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const UserLogin = JSON.parse(localStorage.getItem("UserLogin"));
    const Cart = JSON.parse(localStorage.getItem("Cart"));
    
    //Ng?????i d??ng ph???i ????ng nh???p v?? gi??? h??ng kh??ng ???????c r???ng ????? v??o trang Order
    if(to.name == 'Order'){
        //B???n ph???i ????ng nh???p m???i v??o trnag Order ???????c
        if(UserLogin == null){
            alert("B???n ph???i ????ng nh???p ????? ti???n h??nh ?????t h??ng");
            return '/login';   
        }
        //Gi??? h??ng kh??ng ???????c r???ng m???i v??o trang Order ???????c
        if(Cart == null || Cart.length == 0){
            alert("B???n ch??a c?? s???n ph???m trong gi??? h??ng");
            return '/product/all';
        }
    }

    //Ph???i t??? trang Order chuy???n h?????ng qua trang OrderSuccess
    if(to.name == 'OrderSuccess' && from.name != 'Order'){
        return '/';
    }
    
    //Ph???i ????ng nh???p m???i cho v??o trang UserProfile
    if(to.name == 'UserProfile' && UserLogin == null){
        return '/';
    }

    //Ph???i ????ng nh???p r???i m???i v??o trang DetailOrder ???????c
    if(to.name == 'DetailOrder' && UserLogin == null){
        return '/';
    }

    //Ph???i ????ng nh???p r???i m???i cho v??o trang ChangeUserProfile
    if(to.name == "ChangeUserProfile" && UserLogin == null){
        return '/';
    }

    //Ph???i ????ng nh???p r???i m???i cho v??o trang ?????i m???t kh???u
    if(to.name == "ChangePassword" && UserLogin == null){
        return '/';
    }
})

export default router;