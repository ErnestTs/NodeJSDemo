<template>
    <div class="viewBox loginBox">
        <Header title="登录" />
        <ul>
            <div v-show="!logged">
                <li class="cl">
                    <label for="username" class="fl" >Username</label>
                    <input type="text" name="username" class="fr" v-model="username" />
                </li>
                <li class="cl">
                    <label for="password" class="fl" >Password</label>
                    <input type="password" name="password" class="fr" v-model="password" />
                </li>
                <li>
                    <button @click="login">登陆</button>
                </li>
                <li>
                    <button @click="changeComponentsType">去注册</button>
                </li>
            </div>
            <div v-show="logged">
                <li>
                    <h2>你好！{{username}}</h2>
                    <button @click="logout">登出</button>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import publicFunc from "@/publicFunc/index.js"; 
import $ from "jQuery";
export default {
    components: {
        Header
    },
    props: {
        func: {
            type: Function,
            required: true
        }
    },
    data(){
        return {
            username: "",
            password: "",
            logged : false
        }
    },
    mounted(){
        this.logged = publicFunc.checkCookie("logged")
        if(this.logged){
            this.username = publicFunc.getCookie("logged")
        }
    },
    methods: {
        login(){
            let _this = this;
            let oData = {
                username: this.username,
                password: this.password
            }
            $.ajax({
                method: "POST",
                url: 'http://localhost:3000/login',
                data: oData,
                success: function(res) {
                    let resData = JSON.parse(res)
                    if(resData.code === "S"){
                        publicFunc.modal({title: "登陆成功",content: "",type: "success"});
                        publicFunc.setCookie("logged",oData.username,30);
                        _this.logged = true;
                        // console.log(publicFunc.getCookie("logged"));
                    }else if(resData.code === "E"){
                        publicFunc.modal({title: resData.str,content: "",type: "warning"});
                    }
                }
            })
        },
        changeComponentsType(){
            this.func("Register")
        },
        logout(){
            publicFunc.removeCookie("logged");
            this.logged = false;
            this.username = "";
            this.password = ""
        }
    },
}
</script>

<style lang="less" scoped>
    .loginBox {
        ul {
            padding: 0;
            
            li {
                padding: 0 40px;
                margin-bottom: 20px;

                button {
                    width: 100%;
                    background: #333;
                    color: #FFF;
                    border: 0;
                    height: 40px;
                }
            }
        }
    }
</style>

