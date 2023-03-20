<template style="margin-top:200px;">
  
  <v-app>
      <v-app-bar app class="info" height="70">
          <v-app-bar-nav-icon 
              @click="drawer = true" 
              class="d-flex d-sm-none"
              color="white"
            ></v-app-bar-nav-icon> 

        <v-btn text id="Project-name" color="white">
              <v-icon>mdi-mosque</v-icon> &nbsp;Halawat&nbsp;al-iman
        </v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="scroll('home')" color="white" v-model="tab" class="d-none d-sm-flex"><router-link to="/" style="color: white;"><v-icon>mdi-home</v-icon> Home </router-link> </v-btn>
          <v-btn text @click="scroll('about')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-wrench</v-icon> About</v-btn>
          <v-btn text @click="scroll('activity')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-alt-list</v-icon> Activity</v-btn>
          <v-btn text @click="scroll('gallery')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-image</v-icon>Gallery</v-btn>
          <v-btn text @click="scroll('leaders')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-account-multiple</v-icon>Leaders</v-btn>
          <v-btn text @click="scroll('muslims')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-account-group</v-icon>All Muslims</v-btn>
          <v-btn text @click="scroll('contact')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-phone</v-icon> Contact</v-btn>
          <v-btn text @click="scroll('login')" color="white" v-model="tab" class="d-none d-sm-flex"><router-link to="/login"  style="color: white;"><v-icon>mdi-account</v-icon> Login</router-link></v-btn>
    </v-app-bar>

    <!-- Add a navigation bar -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <h2><b>Masaka sector</b></h2><br>
          <v-list-item><router-link to="/"><v-icon color="primary" class="main-link">mdi-home</v-icon>Ahabanza</router-link></v-list-item>
             <v-list-item><router-link to="/amakuru"><v-icon color="primary" class="main-link">mdi-newspaper</v-icon>Amakuru</router-link></v-list-item>
             <v-list-item><router-link to="/serivise"><v-icon color="primary" class="main-link">mdi-wrench</v-icon>Serivise</router-link></v-list-item>
             <v-list-item><router-link to="/complain"><v-icon color="primary" class="main-links">mdi-pen</v-icon>Waba ufite ikibazo</router-link></v-list-item>
             <v-list-item><router-link to="/abakozi"><v-icon color="primary" class="main-link">mdi-account-multiple</v-icon>Abakozi</router-link></v-list-item>
             <v-list-item><router-link to="/login"><v-icon color="primary">mdi-lock-open</v-icon> Fungura(Login)</router-link></v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  <v-container>
      <div id="login">
      <v-row class="login-row" style="margin-top: 100px;">
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
                  <v-form style="margin-top:30px;" @submit.prevent="LoginHandleForm()" ref="form">
                    <v-text-field
                      type="email"
                      v-model="uname"
                      label="Email"
                      required
                      :rules="nameRules"
                      placeholder="Enter your email"
                      prepend-inner-icon="mdi-email"
                    ></v-text-field>
                    <v-text-field
                      :append-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'password' : 'text'"
                      density="compact"
                      label="Password"
                      required
                      :rules="passRules"
                      placeholder="Enter your password"
                      prepend-inner-icon="mdi-lock"
                      variant="outlined"
                      @click:append-icon="visible = !visible"
                    ></v-text-field>
                    <v-btn
                      color="info"
                      type="submit"
                      @click="validate"
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
    </div>
  </v-container>
</v-app>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'LoginPage',

  data(){
    return {
       drawer: false,
      tab: null,
      title:'Login here',
      uname:'',
      nameRules:[
        v => !!v || 'Email is required !'
      ],
      pswd:'',
      passRules:[
        v =>!!v || 'Password is required !'
      ],
      reveal: false,
      visible:true,
      itemsRes:[],
    }
  },

  methods:{
      async validate(){
        const {valid} =await this.$refs.form.validate();

        if (valid) {
          alert('form is valid !');
        }
        
        // async getData(){
        //   const res=await fetch('http://127.0.0.1:8000/api/login')
        //   const finalRes=await res.json();
        //   console.log(finalRes);
        // }

    }

  }

};
</script>

<style scoped>

  a{
    text-decoration: none;
    color: white;
  }

  a:link{
    text-decoration: none;
    color: white;
  }
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
