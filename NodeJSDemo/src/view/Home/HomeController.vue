<template>
    <div id="box">
        <Header title="首页" :goback='as' back-text='back' :hasShare='true' shareIcon='icon-sanjiao'>
        </Header>
        <NewsList />
        <div>
            <h1 id="testNode">Test</h1>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import NewsList from "@/components/NewsList.vue"


export default {
    components: {
        NewsList, Header
    },
    data(){
        return {
            as: false
        }
    }
}
</script>

<style scoped>
#box {
    margin-top: 50px;
}
</style>
