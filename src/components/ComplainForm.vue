<template>
    <v-btn @click="getData">Get dada</v-btn>
      <!-- <v-card v-if="(firstname in itemsRes)">
        <h1 style="color:blue;">{{firstname}}</h1>
      </v-card> -->
</template>

<script>

  export default{
    name:'ComplainForm',
    data(){
      return{
        itemsRes:[]
      }
      
    },

    methods:{
        async getData(){
          const res=await fetch("http://127.0.0.1:8000/api/testing");
          const finalRes=res.json();
          this.itemsRes=finalRes;
        }
    },

    mounted(){
      this.getData();
    }
  
  }

</script>