<template>
    <div id="app">
        <p>{{message}}</p>
        <p>{{reversedMessage}}</p>
        <button v-on:click="reverseMsg">문자열 역순</button>
    </div>
</template>

<script>

export default{
    name: 'app',
    data: function(){
        return{
            message: 'Hello Vue.js!',
            message2: 'Hello Soyeon?'
        }
    },
    methods: {
        reverseMsg: function(){
            this.message = this.message.split('').reverse().join('');
            return this.message;
        }
    },
    computed: {
        reversedMessage: function(){
            return this.message2.split('').reverse().join('');
        }
    }
}
</script>