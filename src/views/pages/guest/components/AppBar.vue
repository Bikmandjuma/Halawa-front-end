<template>
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
</template>
<script>
	export default{
		name:'PagesGuestComponentsAppBar'
	}
</script>

<style>
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
</style>