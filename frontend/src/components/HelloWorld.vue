<template>
<div id="app">
모든 과일의 총 합은 {{sum}} 입니다.
</div>
</template>

<script>

export default{
    name: 'app',
    data: function(){
        return{
            items: [
                {name : "사과", price : 1000},
                {name : "귤", price : 5000},
                {name : "자두..무서운..자두..", price : 2000},
                {name : "수박", price : 10000},
                {name : "오렌지 오륁", price : 3000}
            ]  
        }
    },
    computed: {
        sum: function(){
            var items = this.items;
            var total = 0;
            items.forEach(function(value) {
                var num = Number(value.price);
                //if(!num){
                    total += num;
                    console.log("total : "+total);
                //}
            });
            return total;
        }
    }
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