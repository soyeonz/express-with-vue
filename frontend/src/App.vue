<template>
<div id="app">
    <router-view></router-view>
    <!-- <div v-if="hasResult">
        <div v-for="post in posts" v-bind:key="post.id">
            <h1>{{post.name}}</h1>
            <p>{{post.company.name}}</p>
        </div>
    </div>
    <button v-else v-on:click="searchTerm">글 불러오기</button>
    <Hello></Hello>
    <Reverse></Reverse> -->
</div>
</template>

<script>
import Hello from './components/HelloWorld'
import Reverse from './components/Reverse'

export default{
    name: 'app'
    // data: function(){
    //     return {
    //         posts: {}
    //     }
    // },
    // computed: {
    //     hasResult: function(){
    //         return this.posts.length > 0
    //     }
    // },
    // methods: {
    //     searchTerm: function(){
    //         //using JSONPlaceholder
    //         const baseURI = 'https://jsonplaceholder.typicode.com';
    //         this.$http.get(`${baseURI}/users`)
    //         .then((result)=>{
    //             console.log(result)
    //             this.posts = result.data
    //             //posts 값이 변경되면 자동으로 hasResult가 갱신되어야 하는거 아닌가? 되는데.. object는 length 값을 저런식으로 못가져오는듯 
    //         })
    //     }
    // },
    // components: {
    //   'Hello': Hello,
    //   'Reverse': Reverse
    // }
}
</script>

<style>
#app{
    font-family: 'Avenir', Helvetica, Arail, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 560px;
}
</style>