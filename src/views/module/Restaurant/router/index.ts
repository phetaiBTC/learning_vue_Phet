import type { RouteRecordRaw } from "vue-router";

export const RestaurantRoute: RouteRecordRaw[] = [
    {
        path: "restaurant",
        name: "restaurant",
        component: () => import("../views/index.vue")
    },
];