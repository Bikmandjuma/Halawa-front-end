<template>
  <v-container>
     
       <v-row> 
          <v-col cols="12" md="12" sm="12">
              <v-card
                elevation="4"
                class="mx-auto text-center"
                style="background-color:steelblue;"
              >
                <v-card-text class="white--text">
                  <h2>ABAKOZI B'UMURENGE</h2>
                </v-card-text>
              </v-card>
          </v-col>
      </v-row>

      <v-row> 
          <v-col cols="12" md="3" sm="4" v-for="i in 20" :key="i">
              <v-card
                elevation="6"
                class="mx-auto"
                max-width="280"
              >
                <!-- <v-card-text class="login-form text-center"> -->
                    <v-img src="../assets/home/1.jpg"></v-img>
                <!-- </v-card-text> -->
                
              </v-card>

          </v-col>

          <v-col cols="12" md="12" sm="12" class="text-center">
            <v-pagination 
              v-model="page"
              :length="15"
              :total-visible="7"
            ></v-pagination>
          </v-col>
        </v-row>

  </v-container>
</template>

<script>

export default {
  name: 'EmployeesList',

  data(){
    return{
      page:1,
    }    
  },


};
</script>

<style scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    justify-content:center;
    text-align:center;
    width: 100%;
  }

  .exp_btn:hover{
    cursor:pointer;
  }

  .forgpswd{
    text-decoration: none;
    color: black;
  }

  .login-row{
    margin-top:30px;
    margin-bottom:30px;
  }

  #employee_social_media{
    padding: 10px;
    text-decoration: none;
  }
</style>
