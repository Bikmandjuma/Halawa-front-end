<template>
  <v-container>
      
      <v-row class="forgotpswd-row">
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
                  <v-form style="margin-top:30px;" @submit.prevent="LoginHandleForm" ref="form">
                    <v-text-field
                      type="email"
                      v-model="email"
                      label="Email"
                      required
                      :rules="frgtpaswdRules"
                      placeholder="Enter your email"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  
                    <v-btn
                      color="info"
                      type="submit"
                      class="mt-4"
                      @click="validate"
                    ><v-icon>mdi-email</v-icon>Send reset link
                    </v-btn>
                  </v-form>
                </v-card-text>
                <v-card-actions class="text-center">
                  <p
                    text
                    color="teal accent-4"
                    style="padding-left:90px;"
                    class="exp_btn"
                  >
                   <router-link to="/login" class="backtologin"><v-icon>mdi-chevron-left</v-icon>Back to login</router-link>
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
      title:'Forgot Password',
      email:'',
      frgtpaswdRules:[
        v => !!v || 'Email is required !'
      ],

    }
  },

  methods:{
      async validate(){
        const {valid}=await this.$refs.form.validate();

        if (valid) {
          console.log(this.email);
        }

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

  .backtologin{
    text-decoration: none;
    color: black;
  }

   .forgotpswd-row{
      margin-top:30px;
      margin-bottom:84px;
    }
</style>
