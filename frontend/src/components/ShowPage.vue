<template>
    <div>
        <h1>상세 내용</h1>
        [{{movie.name}}]
    </div>
</template>

<script>
export default{
    created: function(){
        var id = this.$route.params.id
        this.$http.get(`/api/movies/${id}`)
        .then((response)=>{
            this.movie = response.data
            console.log(this.movie.id);
        })
    },
    data: function(){
        return {
            movie: {}
        }
    }
}
</script>

<style>
</style>