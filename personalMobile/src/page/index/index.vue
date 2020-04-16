<template>
    <div>
        <p class="title">hello vue</p>
        <p class="name">i'm {{name}}</p>
    </div>
</template>

<script>
    export default {
      data(){
            return{
                name: 'page'
            }
        },
        mounted(){
          
        },
        components: {
           
        },
        computed: {
           
        },
        methods: {
            
        }
    }
</script>
  
<style lang="scss" scoped>
   .title{
       text-align: center;
       font-size: 0.4rem;
   }
   .name{
       text-align: center;
       font-size: 0.3rem;
       color: $red;
   }
</style>
