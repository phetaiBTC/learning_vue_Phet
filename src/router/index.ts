import { createRouter, createWebHistory } from "vue-router";
import { RestaurantRoute } from "../views/module/Restaurant/router";
import { HalRoute } from "../views/module/Hal/router";
// import HelloWorld from "../components/HelloWorld.vue";

const routes = [{
    path: "/phetsamay",
    children: [
        // { path: "home", name: "home", component: HelloWorld },
        ...RestaurantRoute,
        ...HalRoute
    ]
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;