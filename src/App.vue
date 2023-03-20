<template>
  <v-app id="home">
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
          <v-btn text @click="scroll('home')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-home</v-icon> Home</v-btn>
          <v-btn text @click="scroll('about')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-wrench</v-icon> About</v-btn>
          <v-btn text @click="scroll('activity')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-alt-list</v-icon> Activity</v-btn>
          <v-btn text @click="scroll('gallery')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-image</v-icon>Gallery</v-btn>
          <v-btn text @click="scroll('leaders')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-account-multiple</v-icon>Leaders</v-btn>
          <v-btn text @click="scroll('muslims')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-account-group</v-icon>All Muslims</v-btn>
          <v-btn text @click="scroll('contact')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-phone</v-icon> Contact</v-btn>
          <v-btn text @click="compose({})" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-account</v-icon> Login</v-btn>
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
          <h2><b>Masaka sector</b></h2><br>
          <v-list-item @click="scroll('home')"><v-icon color="primary" class="main-link">mdi-home</v-icon>Ahabanza</v-list-item>
             <v-list-item><router-link to="/amakuru"><v-icon color="primary" class="main-link">mdi-newspaper</v-icon>Amakuru</router-link></v-list-item>
             <v-list-item><router-link to="/serivise"><v-icon color="primary" class="main-link">mdi-wrench</v-icon>Serivise</router-link></v-list-item>
             <v-list-item><router-link to="/complain"><v-icon color="primary" class="main-links">mdi-pen</v-icon>Waba ufite ikibazo</router-link></v-list-item>
             <v-list-item><router-link to="/abakozi"><v-icon color="primary" class="main-link">mdi-account-multiple</v-icon>Abakozi</router-link></v-list-item>
             <v-list-item><router-link to="/login"><v-icon color="primary">mdi-lock-open</v-icon> Fungura(Login)</router-link></v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid mt-15> 
          
          <template>

                <!-- <v-col cols="12" md="4" ms="3" mt-2>
                  <v-card class="elevation-12" color="info white--text">
                    <v-card-item>
                      <v-icon
                        style="width:200px;height:200px;"
                      >mdi-mosque</v-icon>
                      <h1 mt-2>Welcome</h1>
                      <h1 mt-2>Halawat al-iman</h1>
                      <p mt-2>We university student muslims's who studies in IPRC Tumba located in rwanda country rulindo district and tumba sector</p>
                      <span>
                        <v-icon color="white">mdi-email</v-icon>&nbsp;
                        <v-icon color="white">mdi-phone</v-icon>&nbsp;
                        <v-icon color="white">mdi-whatsapp</v-icon>&nbsp;
                      </span>
                    </v-card-item>
                  </v-card>
                </v-col> -->
                  <v-carousel
                    cycle
                    show-arrows="hover"
                    hide-delimiter-background
                    height="500"
                    cols="12" md="8" ms="3"
                  >
                    <!-- <v-carousel-item>
                      <v-img :src="img1" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img2" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img3" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img4" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img5" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img6" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img7" alt="img goes here"></v-img>
                    </v-carousel-item> -->

                    <v-carousel-item>
                      <v-img :src="img8" alt="img goes here"></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-img :src="img9" alt="img goes here"></v-img>
                    </v-carousel-item>
                  </v-carousel>
                  
          </template>

          <v-col cols="12" md="12" sm="12"  id="about" class="text-center justify-content" mt-20>
            <h2><u> About us</u></h2>
            <!-- <div style='width:200px;justify-content:center;align-items:center;'>
            <v-slider v-model="slider2" color="yellow"></v-slider>
            </div> -->

            <v-card class="elevation-12">
              <v-card-item>about us cintent goes here</v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" md="12" sm="12"  id="activity" class="text-center justify-content">
            <h2><u>Activities</u></h2>
            <br/>
            <!-- <div style='width:200px;justify-content:center;align-items:center;'>
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

          <v-col cols="12" md="12" sm="12" id="gallery" mt-6 class="text-center">
            <h2><u>Gallery</u></h2>
            <br/>
            <v-row>
               <v-col cols="12" md="3" sm="4" v-for="i in 20" :key="i">
                  <v-card
                    elevation="6"
                    class="mx-auto"
                    max-width="340"
                  >
                    <!-- <v-card-text class="login-form text-center"> -->
                        <v-img src="@/assets/home/1.jpg"></v-img>
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

          <v-col cols="12" md="12" sm="12" id="leaders" mt-6 class="text-center">
            <h2><u>Leaders</u></h2>
            <br/>
            <v-row>
               <v-col cols="12" md="3" sm="4" v-for="i in 4" :key="i">
                  <v-card class="elevation-8">
                    <h5>Title</h5>  
                    <v-avatar width="100" height="100">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                      ></v-img>
                    </v-avatar>
                    <h3>both names</h3>
                    <span>
                      <v-icon>mdi-phone</v-icon>
                      <v-icon>mdi-email</v-icon>
                      <v-icon>mdi-whatsapp</v-icon>
                    </span>
                  </v-card>
              </v-col>

            </v-row>
          </v-col>

          <!--contact us-->
          <v-col cols="12" md="12" sm="12" id="contact" mt-10 class="text-center">
            <v-card class="elevation-12">
            <v-row>

                <v-col cols="12" md="4" sm="4">
                  contact info
                </v-col>

                
                  <v-col cols="12" md="8" sm="4">
                    <h2>Leave a message here !</h2>
                    <v-form class="form">
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
                        prepend-inner-icon="mdi-email-edit"
                        style="margin-top:-25px;"
                      ></v-textarea>
                    </v-col>

                    <v-btn color="info">Send <v-icon>mdi-send</v-icon></v-btn>
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
                  <v-card>
                      <v-card-title class="headline info" primary-title>
                        Login here<v-btn text class="ml-auto" style="display: relative;float: right;" @click="saveDraft()" outlined color="white">&times;</v-btn>
                      </v-card-title>
                      <v-card-text class="pa-5">
                          
                      </v-card-text>
                      <v-card-actions class="pa-5">
                          
                      </v-card-actions>
                  </v-card>
              </v-dialog>
            <!--end of login model-->

    </v-container>

    <router-view />

    <!--Footer codes-->
    <v-footer id="footer">
      <v-row>
        <v-col cols="12" md="4" ms="12" class="text-center">
          <h3 class="white--text"><v-icon color="white">mdi-home</v-icon>Masaka Sector</h3><br>
          <p class="white--text">Muhawe ikaze mu murenge wa masaka <br>waba ufite ikibazo ?</p>
          <router-link to="/complain"> <v-btn style="color: steelblue;">Kanda hano</v-btn></router-link>
        </v-col>
        <v-col cols="12" md="4" ms="12" id="footer-links">
          <h3 class="text-center white--text"><v-icon color="white">mdi-hand-down</v-icon> Aho Wakanda(links)</h3><br>
          
          <v-row class="text-center">
            <v-col
                cols="12"
                sm="6"
                md="6"
            >
              <p><router-link to="/"><v-icon color="white">mdi-home</v-icon> Ahabanza</router-link></p>
          
              <p><router-link to="/amakuru"><v-icon color="white">mdi-newspaper</v-icon> Amakuru</router-link></p>
            
              <p><router-link to="/serivise"><v-icon color="white">mdi-wrench</v-icon> Serivise</router-link></p>
            </v-col>

            <v-col
                cols="12"
                sm="6"
                md="6"
            >
              <p><router-link to="/complain"><v-icon color="white" class="main-links">mdi-pen</v-icon> Waba ufite ikibazo</router-link></p>
            
              <p><router-link to="/abakozi"><v-icon color="white">mdi-account-multiple</v-icon> Abakozi</router-link></p>
           
              <p><router-link to="/login"><v-icon color="white">mdi-lock-open</v-icon> Staff's Login</router-link></p>
            </v-col>

          </v-row>

        </v-col>
        <v-col cols="12" md="4" ms="12" id="footer-address" class="text-center">
          <h3 class="white--text">Aho Wadusanga (Address)</h3><br>
            <p><router-link to="/contact"><v-icon color="white">mdi-phone</v-icon> +250785389000</router-link></p>
            <p><router-link to="#"><v-icon color="white">mdi-map-marker</v-icon>Kigali,Kicukiro,Masaka</router-link></p>
            <div id="footer-social-media">
              <router-link to="/facebook"><v-icon color="white">mdi-facebook</v-icon></router-link>
              <router-link to="/whatsapp"><v-icon color="white">mdi-whatsapp</v-icon></router-link>
              <router-link to="/twitter"><v-icon color="white">mdi-twitter</v-icon></router-link>
              <router-link to="/email"><v-icon color="white">mdi-email</v-icon></router-link>
            </div>
        </v-col>
        
        <v-row>
         <v-col
              cols="12"
              sm="12"
              md="12"
              class="text-center"
        >
          <p class="white--text">Copyright &copy; {{currentyear}} , Masaka sector </p>

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

export default {
  name: 'App',
  methods: {
      scroll(refName){
        const element=document.getElementById(refName);
        element.scrollIntoView({behavior:"smooth"});
      },

      compose() {
          this.dialogCompose = true
      },
      saveDraft() {
          this.dialogCompose = false
      },
  },

  data () {
    return {
      drawer: false,
      dialogCompose:false,
      valid:true,
      tab: null,
      slider2:50,
      page:1,
      image:{
        avatar:'masaka.jpg'
      },

      // img1,img2,img3,img4,img5,
      // img6,img7,
      img8,img9,
      currentyear:2023
      
    }
  },
  props:{
    // currentyear=new Date.getFullYear();
  }

}
</script>

<style scoped>

  #app {
/*    background: url('https://ohlaladdani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg')*/
    background: url('https://ohlaladdani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2')
      no-repeat center center fixed !important;
    background-size: cover;
  }
  #tabs_nav{
    margin-top: -10px;
    margin-left: 500px;
  }
  #app_bar{
    height:50px;
  }

  #tabs_nav{
    color:blue;
    left:20px;
    word-spacing: 20px;
    padding:10px;
  }

  #tabs_nav:hover{
    color:red;
    border-bottom:2px solid red;
  }

  #footer{
    background-color:steelblue;
    margin-bottom:0px;
      
/*      background: url('assets/footerbg/img2.jfif')*/
     /* center center !important;
      background-size: cover;
      color:whitesmoke;
      opacity: 0.8;*/
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

  #footer-links a:hover{
    color:white;
/*    margin-left:135px;*/
    margin-left: 5px;
  }

  #footer-social-media a{
    text-decoration: none;
    padding: 10px;
  }

  #footer-address a{
    text-decoration: none;
    color:white;
  }

  #footer-address a:hover{
    margin-left: 5px;
  }

  a{
    text-decoration: none;
  }

  /*@media(max-width:376px){
    #footer{
      padding-top:10px;
    }

    #complain_select,#complain_file{
         margin-top:-25;
    }

  }*/

  .main-link{
    margin-top: -5px;
  }

  .main-links{
    margin-top: -5px;
    transform: rotate(-0.25turn);
  }

  #Project-name{
      padding-top:0px;
  }

</style>