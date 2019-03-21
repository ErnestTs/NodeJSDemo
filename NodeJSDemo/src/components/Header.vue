<template>
    <div class="headerBox">
        <p id="title">
            <a href="javascript:;" id="goBack" v-if='back'>
                〈{{ backText }}
            </a>
            {{ title }}
        </p>
        <slot v-if="hasShare" name="shareButton">
            <a href="javascript:;" id="shareButton">
                <i :class="shareIcon" class="iconfont"></i>
                {{ shareText }}
            </a>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        back: {
            type: Boolean,
            default: true
        },
        backText: {
            type: String,
            default: ''
        },
        shareText: {
            type: String,
            default: 'Share'
        },
        shareIcon: {
            type: String,
            default:'icon-fenxiang'
        },
        hasShare: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .headerBox {
        height: 50px;
        width: 100%;
        position: fixed;
        z-index: 2;
        top: 0;
        background-color: black;
        color: white;
    }
    #goBack {
        position: absolute;
        left: 5px;
        color: white;
    }
    #title {
        text-align: center;
        line-height: 50px;
    }
    #shareButton {
        display: block;
        position: absolute;
        right: 7px;
        top: 50%;
        color: white;
        margin-top: -7px;
    }
</style>
