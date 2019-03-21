<template>
    <div class="viewBox loginBox">
        <Header title="注册" />
        <ul>
            <li class="cl">
                <label for="username" class="fl" >Username</label>
                <input type="text" name="username" class="fr" v-model="username" />
            </li>
            <li class="cl">
                <label for="password" class="fl" >Password</label>
                <input type="password" name="password" class="fr" v-model="password" />
            </li>
            <li class="cl">
                <label for="password" class="fl" >Repassword</label>
                <input type="password" class="fr" v-model="repassword" />
            </li>
            <li>
                <button @click="Register">注册</button>
            </li>
            <li>
                <button @click="changeComponentsType">去登陆</button>
            </li>
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
            repassword: ""
        }
    },
    methods: {
        Register(){
            if(this.password === this.repassword ){
                if( this.username === "" ){
                    return publicFunc.modal({title: "注册失败",content: "用户名不能为空",type: "error"})
                }
                if( this.password === "" ){
                    return publicFunc.modal({title: "注册失败",content: "密码不能为空",type: "error"})
                }
                let oData = {
                    username: this.username,
                    password: this.password
                }
                $.ajax({
                    method: "POST",
                    url: 'http://localhost:3000/register',
                    data: oData,
                    success: function(res) {
                        let resData = JSON.parse(res)
                        if(resData.code === "S"){
                            publicFunc.modal({title: resData.str,content: "",type: "success"})
                        }else if(resData.code === "E"){
                            publicFunc.modal({title: resData.str,content: "",type: "warning"})
                        }
                    }
                })

            }else {
                return publicFunc.modal({title: "注册失败",content: "两次密码不一致",type: "error"})
            }
        },
        changeComponentsType(){
            this.func("Login")
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

