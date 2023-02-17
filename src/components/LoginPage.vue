<template>
  <v-container>
      
      <v-row class="login-row">
          <v-col cols="12" md="4" sm="4"></v-col>
          <v-col cols="12" md="4" sm="4">

              <v-card
                elevation="15"
                class="mx-auto"
                max-width="344"
              >
                <v-card-text class="login-form text-center">
                  <div class="text-center">
                    <h2>{{title}}</h2>
                  </div>

                  <p v-if="item in itemsRes" :key="item">
                    <v-alert color="success">
                      {{item}}
                    </v-alert>
                  </p>
                  <v-form style="margin-top:30px;" @submit="LoginHandleForm">
                    <v-text-field
                      type="email"
                      v-model="uname"
                      label="Email"
                      placeholder="Enter your email"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                      :append-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'password' : 'text'"
                      density="compact"
                      label="Password"
                      placeholder="Enter your password"
                      prepend-inner-icon="mdi-lock"
                      variant="outlined"
                      @click:append-icon="visible = !visible"
                    ></v-text-field>
                    <v-btn
                      color="info"
                      type="submit"
                    ><v-icon>mdi-lock-open</v-icon>Login
                    </v-btn>
                  </v-form>
                </v-card-text>
                <v-card-actions class="text-center">
                  <p
                    text
                    color="teal accent-4"
                    @click="reveal=true"
                    style="padding-left:90px;"
                    class="exp_btn"
                  >
                   <router-link to="/forgot-password" class="forgpswd" > <v-icon>mdi-key</v-icon> Forgot password</router-link>

                  </p>
                </v-card-actions>
              </v-card>

          </v-col>
          <v-col cols="12" md="4" sm="4"></v-col>
        </v-row>

  </v-container>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'LoginPage',

  data(){
    return {
      title:'Login here',
      uname:'',
      pswd:'',
      reveal: false,
      visible:true,
      itemsRes:[],
    }
  },

  methods:{
      // async LoginHandleForm(e){
      //   e.preventDefault()
      async getData(){
        const res=await fetch('http://127.0.0.1:8000/api/login')
        const finalRes=await res.json();
        console.log(finalRes);
      }
  }
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
</style>
