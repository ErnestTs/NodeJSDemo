import Vue from "vue"
import Router from "vue-router"
import {RouterArr} from "./router"



Vue.use(Router)

export const router = new Router ({
    routes: RouterArr
})