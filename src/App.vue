<template>
  <v-app app>
    <v-app-bar app class="white" height="20">
       <v-app-bar-nav-icon 
          @click="drawer = true" 
          class="d-flex d-sm-none"
          ></v-app-bar-nav-icon>
        <v-toolbar-title  class="mt-10"><v-icon style="margin-top:-4px;">mdi-home</v-icon><b>MASAKA SECTOR</b></v-toolbar-title>
        
        <template v-slot:extension>
          <v-spacer></v-spacer>
          <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex"
            id="tabs_nav"
          >
            <tab><router-link to="/"><v-icon color="primary" class="main-link">mdi-home</v-icon>AHABANZA</router-link></tab>
            <tab><router-link to="/amakuru"><v-icon color="primary" class="main-link">mdi-newspaper</v-icon>AMAKURU</router-link></tab>
            <tab><router-link to="/serivise"><v-icon color="primary" class="main-link">mdi-wrench</v-icon>SERIVISE</router-link></tab>
            <tab><router-link to="/complain"><v-icon color="primary" class="main-links">mdi-pen</v-icon>WABA UFITE IKIBAZO</router-link></tab>
            <tab><router-link to="/abakozi"><v-icon color="primary" class="main-link">mdi-account-multiple</v-icon>ABAKOZI</router-link></tab>
            <!-- <tab style="display:relative;margin-left:50px;"><router-link to="/login"><v-icon color="primary" class="main-link">mdi-lock</v-icon>Login</router-link></tab> -->
          </v-tabs>
        </template>
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

    <v-main>
        <router-view></router-view>
    </v-main>

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
export default {
  
  name: 'App',
  data () {
    return {
      drawer: false,
      tab: null,
      image:{
        avatar:'masaka.jpg'
      },

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

  #tabs_nav a{
    text-decoration:none;
    color:blue;
    left:20px;
    padding:10px;
  }

  #tabs_nav a:hover{
    color:red;
    border-bottom:2px solid red;
  }

  #footer{
    background-color:steelblue;
      
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

</style>