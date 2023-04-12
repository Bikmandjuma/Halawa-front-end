<template>
  <v-app id="home">
      <v-app-bar app class="info" height="70">
          <v-app-bar-nav-icon 
              @click="drawer = true"
              class="d-flex d-sm-none"
              color="white"
          ></v-app-bar-nav-icon> 

          <v-btn text id="Project-name" color="white">
              <v-icon>mdi-mosque</v-icon> &nbsp;<h2>Halawat&nbsp;al-iman</h2>
          </v-btn>

          <v-spacer></v-spacer>

           <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex end"
            id="tabs_nav"
            align-tabs="end"
            style="margin-top:20px;"
          >
              <tab @click="scroll('home')" color="white"><v-icon color="white">mdi-home</v-icon> Home</tab>
              <tab @click="scroll('about')" color="white"><v-icon color="white">mdi-newspaper</v-icon> About</tab>
              <tab @click="scroll('activity')" color="white"><v-icon color="white">mdi-semantic-web</v-icon> Activity</tab>
              <tab @click="scroll('gallery')" color="white"><v-icon color="white">mdi-image</v-icon>Gallery</tab>
              <tab @click="scroll('leaders')" color="white"><v-icon color="white">mdi-account-multiple</v-icon>Leaders</tab>
              <tab @click="scroll('muslims')" color="white"><v-icon color="white">mdi-account-group</v-icon>&nbsp;All Muslims</tab>
              <tab @click="scroll('contact')" color="white"><v-icon color="white">mdi-phone</v-icon> Contact</tab>
              <tab @click="compose({})" color="white" style="display: relative;margin-left: 30px;"><v-icon color="white">mdi-account</v-icon> Login</tab>
        </v-tabs>
    </v-app-bar>

    <!-- Add a navigation bar -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <h4><b><v-icon color="primary">mdi-mosque</v-icon>&nbsp;Halawat al-iman</b></h4><br>
          <v-list-item @click="scroll('home')"><v-icon color="primary" class="main-link">mdi-home</v-icon>Home</v-list-item>
          <v-list-item @click="scroll('about')"><v-icon color="primary" class="main-link">mdi-newspaper</v-icon>About us</v-list-item>
          <v-list-item @click="scroll('activity')"><v-icon color="primary" class="main-link">mdi-semantic-web</v-icon>Activity</v-list-item>
          <v-list-item @click="scroll('gallery')"><v-icon color="primary" class="main-link">mdi-image</v-icon>Gallery</v-list-item>
          <v-list-item @click="scroll('leaders')"><v-icon color="primary" class="main-link">mdi-account-multiple</v-icon>Leaders</v-list-item>
          <v-list-item @click="scroll('muslims')"><v-icon color="primary" class="main-link">mdi-account-group</v-icon>Muslims</v-list-item>
          <v-list-item @click="scroll('contact')"><v-icon color="primary" class="main-link">mdi-phone</v-icon>Contact us</v-list-item>
          <v-list-item @click="compose({})"><v-icon color="primary">mdi-account</v-icon>Login</v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid mt-15> 
        <v-col cols="12" md="12" sm="12"  id="home" class="text-center">
          <template>

                  <v-carousel
                    cycle
                    hide-delimiter-background
                    max-height="100%"
                    cols="12" md="8" ms="3"
                  >
                
                    <v-carousel-item>
                      <v-img :src="img8" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img9" alt="img goes here"></v-img>
                    </v-carousel-item>
                  </v-carousel>
                  
          </template>
        </v-col>

          <v-col cols="12" md="12" sm="12"  id="about" class="text-center">
            <h1 class="info--text">About us</h1>
            <br />
            <!-- <div style='width:200px;justify-content:center;align-items:center;'>
            <v-slider v-model="slider2" color="yellow"></v-slider>
            </div> -->

                <v-card
                  class="elevation-8"                 
                  text="..."
                >
                  <!-- <p>About us content goes here !</p> -->
                   <div v-for="data in AboutContents" :key="data.id">
                      <div v-for="about in data" :key="about.id">
                         <v-row>
                            <v-col cols="12" md="4" sm="4">
                                <v-img class="p-2" src="@/assets/home/8.jpg" alt="about us image"></v-img>
                            </v-col>
                            <v-col cols="12" md="8" sm="8"
                              style="height:300px;overflow:auto;"
                            >
                                <span v-for="i in 2" :key="i">
                                    <p>
                                        {{ about.content }}
                                    </p>
                                </span>
                            </v-col>
                         </v-row>
                      </div>
                   </div>


                   <!-- <span>{{ AboutContents }}</span> -->
                </v-card>

          </v-col>

          <v-col cols="12" md="12" sm="12"  id="activity" class="text-center">
            <h1 class="info--text">Activities</h1>
            <br />
            <!-- <br/> -->
            <!-- <div id="slider-line">
                <v-slider v-model="slider2" color="yellow"></v-slider>
            </div> -->

            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12"  md="4" sm="3">
                  image
                </v-col>
                <v-col cols="12"  md="8" sm="3">
                  content
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" md="12" sm="12" id="gallery" class="text-center">
            <h1 class="info--text">Gallery</h1>
            <br/>
            <v-row>
               <v-col cols="12" md="3" sm="4" v-for="i in 20" :key="i">
                  <v-card
                    elevation="6"
                    class="mx-auto"
                   
                  >
                    <!-- <v-card-text class="login-form text-center"> -->
                        <v-img src="@/assets/home/8.jpg"></v-img>
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
          </v-col>

          <v-col cols="12" md="12" sm="12" id="leaders"  class="text-center">
            <h1 class="info--text">Leaders</h1>
            <br/>
            <v-row>
               <v-col cols="12" md="3" sm="4" v-for="i in 4" :key="i">
                  <v-card class="elevation-8">
                    <h5>Title name</h5>  
                    <v-avatar
                      width="100"
                      height="100"
                      class="mt-3"
                    >
                      <v-img
                        style="border:1px solid black;"
                        src="https://bikmandjumaportfolio.netlify.app/assets/img/about.jpg"
                        alt="John"
                      ></v-img>
                    </v-avatar>
                    <h3 class="mt-3">both names</h3>
                    <span class="mt-3">
                      <v-icon>mdi-phone</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;<v-icon>mdi-email</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;<v-icon>mdi-whatsapp</v-icon>
                    </span>
                  </v-card>
              </v-col>

            </v-row>
          </v-col>

          <!--all muslims-->
           <v-col cols="12" md="12" sm="12" id="muslims" class="text-center">
            <h1 class="info--text">All Muslims <v-badge color="info" content="N"></v-badge></h1>
            <br/>
            <v-row>
               <v-col cols="12" md="3" sm="4" v-for="i in 8" :key="i">
                  <v-card class="elevation-8">
                    <h4 class="mt-3">Title</h4>  
                    <v-avatar width="100" height="100" class="mt-3">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                      ></v-img>
                    </v-avatar>
                    <h3 class="mt-4">Firstname Lastname</h3>
                    <br />
                    <span style="padding-bottom:5px;">
                      <v-icon color="primary">mdi-phone</v-icon>&nbsp;&nbsp;
                      <v-icon color="primary">mdi-email</v-icon>&nbsp;&nbsp;
                      <v-icon color="primary">mdi-whatsapp</v-icon>
                    </span>
                  </v-card>
              </v-col>

            </v-row>
          </v-col>
          <!--end of all muslims-->

          <!--contact us-->
          <v-col cols="12" md="12" sm="12" id="contact"  class="text-center">
            <h1 class="info--text">Contact us</h1><br />
            <v-card class="elevation-12">
            <v-row>

                <v-col cols="12" md="4" sm="4">
                  <h2>contact info</h2>
                  <div style="margin-top:45px;">
                      <v-icon color="info">mdi-map-marker</v-icon>
                      <p>Rulindo tumba</p>

                      <v-icon color="info">mdi-phone</v-icon>
                      <p>+0780000000</p>

                      <v-icon color="info">mdi-email</v-icon>
                      <p>halawa@gmail.com</p>
                  </div>
                </v-col>

                <v-col cols="12" md="8" sm="4">
                    <h2><v-icon color="info">mdi-comment</v-icon>&nbsp;Leave a message here !</h2>
                    <v-form class="form lazy-validation" v-model="SendCommentValid" ref="SendComment">
                      <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        label="Names"
                        variant="solo"
                        placeholder="enter fullname. . . .  ex:Bikman djuma"
                        prepend-inner-icon="mdi-account"
                        style="margin-top:-10px;"
                        required
                        :rules="NameCommentRules"
                        v-model="NameComment"

                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        label="Email"
                        placeholder="Enter email . . .  ex:bikman@gmail.com"
                        variant="filled"
                        prepend-inner-icon="mdi-email"
                        style="margin-top:-20px;"
                        required
                        :rules="EmailRules"
                        v-model="EmailComment"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-textarea
                        label="Message"
                        placeholder="Type message . . . ex: hi bikman"
                        variant="outlined"
                        rows="2"
                        prepend-inner-icon="mdi-pencil"
                        style="margin-top:-25px;"
                        required
                        :counter="2"
                        :rules="[rules.required]"
                        v-model="MessageComment"
                        
                      ></v-textarea>
                    </v-col>

                    <v-btn color="info" @click="SendCommentBtn" type="submit" :disabled="!SendCommentValid">Send <v-icon>mdi-send</v-icon></v-btn>
                    </v-form>
                  </v-col>
                
            </v-row>
            </v-card>
          </v-col>
          <!--end of contact us-->
          <br />

            <!--login model-->
              <v-dialog
                  v-model="dialogCompose"
                  width="300">
                  <v-card class="justify-content text-center">

                      <v-card-text>
                        <h2 style="margin-top:5px;"><v-icon>mdi-lock-open</v-icon>&nbsp;Login</h2>
                        <p @click="CloseModel()" id="cancel_times" style="color: red;display: relative; margin-top: -20px;margin-left:250px;">X</p>
                            
                            <p style="color:green;" v-if="welllogin">{{ welllogin }}</p>
                            <p style="color:red;" v-else-if="WrongCred">{{ WrongCred }}</p>

                            <v-form ref="LoginForm" v-model="valid" @submit="SubmitLogin" class="lazy-validation">
                              <v-text-field
                                label="Email"
                                variant="solo"
                                placeholder="Enter email"
                                prepend-inner-icon="mdi-email"
                                v-model.trim.lazy="loginEmail"
                                required
                                :rules="EmailRules"
                              ></v-text-field>
                              <v-text-field
                                label="Password"
                                variant="solo"
                                placeholder="Enter password"
                                prepend-inner-icon="mdi-key"
                                :type="showpswd ? 'text' : 'password'"
                                :append-icon="showpswd ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showpswd=!showpswd"
                                v-model="loginPassword"
                                :rules="[rules.required]"
                                
                              ></v-text-field>
                              <v-btn color="primary" :disabled="!valid" type="submit" @click="validate"><v-icon>mdi-lock-open</v-icon>&nbsp;Login</v-btn>
                              <p @click="reveal=true" class="mt-5" id="forgot-paswd" style="font-size: 18px;"><v-icon>mdi-lock-question</v-icon>Forgot password</p>
                            </v-form>

                      </v-card-text>
                    
                      <v-expand-transition>
                        <v-card
                          v-if="reveal"
                          class="v-card--reveal"
                          style="height: 100%;"
                        >
                          <v-card-text class="pb-0">
                            <h2><v-icon>mdi-lock-question</v-icon> Forgot password</h2>
                            <p @click="CloseModel()" id="cancel_times" style="color: red;display: relative; margin-top: -20px;margin-left:250px;">X</p>

                            <v-form v-model="ForgotPswdValid" ref="ForgotPSWD" class="lazy-validation" @submit="SubmitForgotPSWD">
                              <v-text-field
                                label="Email"
                                variant="solo"
                                placeholder="Enter email"
                                prepend-inner-icon="mdi-email"
                                v-model.trim.lazy="forgotpswdEmail"
                                required
                                :rules="EmailRules"
                              ></v-text-field>
                              <v-btn color="primary mt-3" type="submit" :disabled="!ForgotPswdValid" @click="ValidateForgotPSWD">Send reset link&nbsp;&nbsp;<v-icon>mdi-send</v-icon></v-btn>
                              <p @click="reveal=false" class="mt-6" id="back-to-login" style="font-size: 18px;"><v-icon>mdi-undo</v-icon> Back to login</p>
                            </v-form>

                          </v-card-text>
                          
                        </v-card>
                      </v-expand-transition>
              
                  </v-card>
              </v-dialog>
            <!--end of login model-->

    </v-container>

    <router-view />

    <!--Footer codes-->
    <v-footer id="footer">
      <v-row>
        <v-col cols="12" md="4" ms="12" class="text-center">
          <h3 class="white--text"><v-icon color="white">mdi-mosque</v-icon> Halawat al-iman</h3><br>
          <p class="white--text">We are IPRC TUMBA students' Muslims this website is used for our management activities like storing our stuff and many more . . . .</p>
        </v-col>
        <v-col cols="12" md="4" ms="12" id="footer-links">
          <h3 class="text-center white--text">Usefull links&nbsp;<v-icon color="white">mdi-gesture-double-tap</v-icon></h3><br>
          
          <v-row class="text-center" id="footer-row">
            <v-col
                cols="12"
                sm="4"
                md="4"
            >
              <p class="white--text" @click="scroll('home')" ><v-icon color="white">mdi-home</v-icon>Home</p>
          
              <p class="white--text" @click="scroll('about')" ><v-icon color="white">mdi-newspaper</v-icon> About</p>
            
              <p class="white--text" @click="scroll('activity')" ><v-icon color="white">mdi-semantic-web</v-icon> Activity</p>

            </v-col>
            
            <v-col
                cols="12"
                sm="4"
                md="4"
            >

              <p class="white--text" @click="scroll('gallery')" ><v-icon color="white">mdi-image</v-icon> Gallery</p>
            
              <p class="white--text" @click="scroll('leaders')" ><v-icon color="white">mdi-account-multiple</v-icon> Leaders</p>
            
              <p class="white--text" @click="scroll('muslims')" ><v-icon color="white">mdi-account-group</v-icon> Muslims</p>
            </v-col>

            <v-col
              cols="12"
              sm="4"
              md="4"
            >
              
              <p class="white--text" @click="scroll('contact')" ><v-icon color="white">mdi-phone</v-icon> Contact</p>
              <p class="white--text"><router-link to="/muslims/self-registration"><v-icon color="white">mdi-pencil</v-icon>registration</router-link></p>
              <p class="white--text" @click="compose({})" ><v-icon color="white">mdi-lock-open</v-icon> Login</p>
            </v-col>

          </v-row>

        </v-col>
        <v-col cols="12" md="4" ms="12" id="footer-address" class="text-center">
          <h3 class="white--text">Location (address)</h3><br>
            <p class="white--text"><v-icon color="white">mdi-phone</v-icon>&nbsp;+250780000000</p>
            <p class="white--text"><v-icon color="white">mdi-map-marker</v-icon>&nbsp;Northern-rulindo-tumba</p>
            <p class="white--text"><v-icon color="white">mdi-email</v-icon>&nbsp;halawa@gmail.com</p>
        </v-col>
        
        <v-row>
         <v-col
              cols="12"
              sm="12"
              md="12"
              class="text-center"
        >
          <p class="white--text">Copyright &copy; 2022 - {{currentyear}} , Halawat al-iman </p>

        </v-col>
      </v-row>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>

  // import img1 from '@/assets/home/1.jpg'
  // import img2 from '@/assets/home/2.jpg'
  // import img3 from '@/assets/home/3.jpg'
  // import img4 from '@/assets/home/4.jpg'
  // import img5 from '@/assets/home/5.jpg'
  // import img6 from '@/assets/home/6.jpg'
  // import img7 from '@/assets/home/7.jpg'
  import img8 from '@/assets/home/8.jpg'
  import img9 from '@/assets/home/9.jpg'
  import Axios from 'axios'
export default {
  name: 'ViewIndex',

  data () {
    return {
      showpswd:false,
      reveal:false,
      drawer: false,
      dialogCompose:false,
      valid:false,
      SendCommentValid:false,
      ForgotPswdValid:false,
      loginPassword: "",
      loginEmail: "",
      tab: null,
      slider2:50,
      WrongCred:'',
      page:1,
      image:{
        avatar:'masaka.jpg'
      },

      // img1,img2,img3,img4,img5,
      // img6,img7,
      img8,img9,
      AboutContents:[],
      forgotpswdEmail:'',
      NameComment:'',
      EmailComment:'',
      MessageComment:'',
      currentyear:new Date().getFullYear(),
      EmailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],

      rules: {
        required: value => !!value || "Required."
      },

      NameCommentRules: [
          value => !!value || "Required.",
          value => /[A-Za-z]/.test(value) || "Enter only text please !"
      ],
      
    }

  },

  methods: {
      scroll(refName){
        const element=document.getElementById(refName);
        element.scrollIntoView({behavior:"smooth"});
      },

      compose() {
          this.dialogCompose = true
      },

      CloseModel() {
          this.dialogCompose = false
      },

      async validate(e) {
          e.preventDefault()
          const loginResult=await Axios.post('http://localhost:8000/api/login',{
            email:this.loginEmail,
            password:this.loginPassword,
          });
          
          console.warn(loginResult);
          if(loginResult.status == 200){
            localStorage.setItem("user-token",JSON.stringify(loginResult.data))
            this.$router.push({name:"UserPage"})
          }

          if(!loginResult){
            alert("Wrong credentials !");
          }
       
      },

      reset() {
        this.$refs.form.reset();
      },

      resetValidation() {
        this.$refs.form.resetValidation();
      },

      async ValidateForgotPSWD(e){
            e.preventDefault()

            console.log('forgot pswd is clicked !');

      },

      async SendCommentBtn(e){
          e.preventDefault()
          //code of send message goes here  ... !
      },

      async AboutContent(){
          const about=await fetch("http://localhost:8000/api/ViewAboutUs");
          const AboutResult=await about.json();
          this.AboutContents=AboutResult;
      }

  },

  mounted(){
    this.AboutContent()
  }


}
</script>

<style scoped>

  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }

   #back-to-login:hover,#forgot-paswd:hover{
      cursor: pointer;
      color:steelblue;
   }

  .main-link-btn{
    padding: 0px;
  }

  #cancel_times:hover{
    cursor: pointer;
  }

  tab{
    color: white;
    padding:10px;
  }

  @media screen and (min-width: 968px) {
    :root {
      --big-font-size: 3.5rem;
      --h2-font-size: 2rem;
      --normal-font-size: 1rem;
      --smaller-font-size: .875rem;
    }
  }

 /* @media screen and ( max-width:300px) {
    .main-links{
      margin-top: -50px;
    }
  }*/

  #tabs_nav tab:hover{
    color:#eee;
    cursor: pointer;
    border-bottom:white;
  }
  
  #tabs_nav{
    display:relative;
    margin-top: -10px;
    margin-left:200px;
  }
  
  #app_bar{
    height:50px;
  }

/*  #tabs_nav{
    color:blue;
    left:20px;
    word-spacing: 20px;
    padding:10px;
  }*/

  #footer-row p:hover{
    cursor: pointer;
    color: black;
  }

  #footer{
    background-color:steelblue;
    margin-bottom:0px;
  }

  #footer-links a{
    text-decoration: none;
    color:whitesmoke;
/*    margin-left: 130px;*/
  }

  form{
    padding:0px 20px 0px 20px;
    margin-top: 40px;
  }

  a{
    text-decoration: none;
  }

  #Project-name{
      padding-top:0px;
  }

  #slider-line{
    display:  relative;
    justify-items: center;
    float: center;
    width:200px;justify-content:center;align-items:center
  }

</style>