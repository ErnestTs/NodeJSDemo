<template>
    <div class="viewBox loginBox">
        <component :is="componentsType" :func="changeComponentsType" />
    </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import $ from "jQuery";
export default {
    components: {
        Login,Register
    },
    data(){
        return {
            componentsType : "Login"
        }
    },
    methods: {
        changeComponentsType(type){
            this.componentsType = type
        }
    }
}
</script>

<style lang="less" scoped>

</style>

