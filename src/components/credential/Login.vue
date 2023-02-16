<template>
  <v-container>
      
      <v-row>
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
                  <v-form style="margin-top:30px;" @submit="LoginHandleForm">
                    <v-text-field
                      type="email"
                      v-model="uname"
                      label="Email"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                      type="password"
                      label="Password"
                      v-model="pswd"
                      prepend-inner-icon="mdi-lock"
                      append-icon="mdi-eye"
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

export default {
  name: 'HelloWorld',

  data(){
    return {
      title:'Login here',
      uname:'',
      pswd:'',
      reveal: false,
    }
  },

  methods:{
      LoginHandleForm(e){
        e.preventDefault()

        console.log(this.uname+" "+this.pswd);
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
</style>
