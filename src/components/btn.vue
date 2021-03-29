<template>
    <button class="btn subtitle__third">
        {{name}}
    </button>
</template>
<script>
export default {
    name:'btn',
    props:{
        name: String
    }
}
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
    .btn{
        padding:1em;
        color:#fff;
        border-radius: 6px;
        width: 100%;
        background-color:$color-principal;
        transition: background-color .5s;
        &:hover{
            background-color:darken($color-principal, 10)
        }
    }
</style>