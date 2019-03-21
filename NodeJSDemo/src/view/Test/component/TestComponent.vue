<template>
    <div>
        <ul>
            <li v-for="(item, i) in list" :key="i">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: {
        list:{
            type: Array,
            default: ()=>{
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
ul{
    li{
        float: left;
    }
}
</style>
