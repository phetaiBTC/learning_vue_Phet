import type { RouteRecordRaw } from "vue-router";

export const HalRoute: RouteRecordRaw[] = [
    {
        path: "hal",
        name: "hal",
        component: () => import("../views/index.vue")
    },
];