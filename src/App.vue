<template>
  <v-app id="home">
      <v-app-bar color="primary">cool</v-app-bar>
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
          <v-btn text @click="scroll('home')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-home</v-icon> Home</v-btn>
          <v-btn text @click="scroll('about')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-newspaper</v-icon> About</v-btn>
          <v-btn text @click="scroll('activity')" color="white" v-model="tab" class="d-none d-sm-flex"><v-icon>mdi-semantic-web</v-icon> Activity</v-btn>
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
          <h2><b><v-icon color="primary">mdi-mosque</v-icon>&nbsp;Halawat al-iman</b></h2><br>
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

          <v-col cols="12" md="12" sm="12"  id="about" class="text-center justify-content mt-30">
            <h2><u> About us</u></h2>
            <!-- <div style='width:200px;justify-content:center;align-items:center;'>
            <v-slider v-model="slider2" color="yellow"></v-slider>
            </div> -->

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card
                  class="elevation-8"
                  v-bind="props"
                  :color="isHovering ? 'primary' : undefined"
                  title="Hover over me"
                  text="..."
                >
                  <v-card-item>About us content goes here !</v-card-item>
                </v-card>
              </template>
            </v-hover>

          </v-col>

          <v-col cols="12" md="12" sm="12"  id="activity" class="text-center">
            <h2>Activities</h2>
            <!-- <br/> -->
            <div id="slider-line">
                <v-slider v-model="slider2" color="yellow"></v-slider>
            </div>

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

          <!--all muslims-->
           <v-col cols="12" md="12" sm="12" id="muslims" mt-6 class="text-center">
            <h1 class="info--text">All Muslims <v-badge inline color="primary" content="N"></v-badge></h1>
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
                      <v-icon>mdi-map-marker</v-icon>
                      <p>Rulindo tumba</p>

                      <v-icon>mdi-phone</v-icon>
                      <p>+0780000000</p>

                      <v-icon>mdi-email</v-icon>
                      <p>halawa@gmail.com</p>
                  </div>
                </v-col>

                <v-col cols="12" md="8" sm="4">
                    <h2><v-icon>mdi-comment</v-icon>&nbsp;Leave a message here !</h2>
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
                  <v-card class="justify-content text-center">

                      <v-card-text>
                        <h2 style="margin-top:5px;">Login</h2>
                            <v-form>
                              <v-text-field
                                label="Username"
                                variant="solo"
                                placeholder="Enter email"
                                prepend-inner-icon="mdi-email"
                              ></v-text-field>
                              <v-text-field
                                label="Password"
                                variant="solo"
                                placeholder="Enter password"
                                prepend-inner-icon="mdi-lock"
                                type="password"
                              ></v-text-field>
                              <v-btn color="primary"><v-icon>mdi-lock-open</v-icon>&nbsp;&nbsp;Login</v-btn>
                              <p @click="reveal=true" class="mt-3" style="font-size: 18px;"><v-icon>mdi-key</v-icon>Forgot password</p>
                            </v-form>

                      </v-card-text>
                    
                      <v-expand-transition>
                        <v-card
                          v-if="reveal"
                          class="v-card--reveal"
                          style="height: 100%;"
                        >
                          <v-card-text class="pb-0">
                            <h2>Forgot password</h2>
                            <v-form>
                              <v-text-field
                                label="Email"
                                variant="solo"
                                placeholder="Enter email"
                                prepend-inner-icon="mdi-email"
                              ></v-text-field>
                              <v-btn color="primary mt-3">Send reset link&nbsp;&nbsp;<v-icon>mdi-send</v-icon></v-btn>
                              <p @click="reveal=false" class="mt-6" style="font-size: 18px;"><v-icon>mdi-undo</v-icon> Back to login</p>
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
          <h3 class="text-center white--text">where to click (links)&nbsp;<v-icon color="white">mdi-gesture-double-tap</v-icon></h3><br>
          
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
              <p class="white--text" @click="compose({})" ><v-icon color="white">mdi-lock-open</v-icon> Login</p>
            </v-col>

          </v-row>

        </v-col>
        <v-col cols="12" md="4" ms="12" id="footer-address" class="text-center">
          <h3 class="white--text">Location (address)</h3><br>
            <p class="white--text"><v-icon color="white">mdi-phone</v-icon>&nbsp;+250780000000</p>
            <p class="white--text"><v-icon color="white">mdi-map-marker</v-icon>&nbsp;western-rulindo-tumba</p>
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
      reveal:false,
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

  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
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

  #footer-row p:hover{
    cursor: pointer;
    color: black;
  }

  #tabs_nav:hover{
    color:red;
    border-bottom:2px solid red;
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