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
          <v-col cols="12" md="3" sm="4" v-for="i in 8" :key="i">
              <v-card
                elevation="6"
                class="mx-auto"
                max-width="280"
              >
                <v-card-text class="login-form text-center">
                    <v-avatar size="120" color="indigo lighten-4">
                      <v-icon size="80">mdi-account</v-icon>
                    </v-avatar>
                    <p>Etant civile</p>
                    <p>Ntiruhungwa Bikman djuma</p>
                    <p>0785389000</p>
                    <!-- <p>ntiruhungwab@gmail.com</p> -->

                    <router-link to="/socialmedia" id="employee_social_media"><v-icon color="info">mdi-whatsapp</v-icon> </router-link>
                    <router-link to="/socialmedia" id="employee_social_media"><v-icon color="info">mdi-email</v-icon> </router-link>
                    <!-- <router-link to="/socialmedia" id="employee_social_media"><v-icon color="info">mdi-facebook</v-icon> </router-link> -->
                </v-card-text>
                
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
