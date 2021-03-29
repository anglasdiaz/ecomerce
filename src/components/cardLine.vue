<template>
    <article class="cardLine">
        <div class="flex">
            <i class="large material-icons mr-1 ">{{icon}}</i>
            <article class="cardLine__caption">
                <h3 class="subtitle__secundary mb-3">{{title}}</h3>
                <p class="cardLine__content">{{text}}</p>
            </article>
        </div>
    </article>
</template>

<script>

export default {
    name:'cardLine',
    props:{
        title: String,
        text: String,
        icon: String,
    },
    data(){
        return{
        }
    },
    methods:{

    }
}
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
    .cardLine{
        width: 100%;
        background-color:#F2F3F5;
        padding:3em;
        border-radius: 7px;
        margin-bottom: 1em;
        &__caption{
            width: 100%;
        }
        &__content{
            display:none;
             @include mediaQ(796px){
            display:block;
            }
        }
        i{
            font-size:4rem;
            margin-right: .5em;
            color: $color-principal;
        }
    }
</style>