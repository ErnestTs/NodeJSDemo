<template>
    <div class="footerBox">
        <ul class="footerMenu">
            <li v-for="(item, i) in menulist" :key="i" :class="actClass(item)">
                <router-link :to='getLink(item)'>{{ item.label }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        menulist: {
            type: Array,
            required: true
        }
    },
    methods: {
        actClass(val){
            if (val.value == this.$route.path.substring(1) || val.linkName == this.$route.path.substring(1) ){
                return "active"
            }else {
                return ''
            }
        },

        getLink(val){
            if(val.linkName){
                return val.linkName
            }else{
                return val.value
            }
        }
    }
}
</script>

<style lang='less' scoped>
    .footerBox {
        height: 50px;
        width: 100%;
        position: fixed;
        z-index: 2;
        bottom: 0;
        background-color: black;
        color: white;

        .footerMenu{
            display: flex;
            padding: 0;
            margin: 0;
            line-height: 50px;

            li {
                flex: 1;
                text-align: center;
                font-weight: bold;
                letter-spacing: 2px;

                a {
                    color: white;
                }
            }
        }
    }
    .active {
        background-color: whitesmoke;

        a{
            color: #333 !important;
        }
    }
</style>
