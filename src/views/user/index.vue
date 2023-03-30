<template>
  <v-app id="inspire">
    <v-app-bar app color="info white--text">
      <v-app-bar-nav-icon
          @click="drawer=true"
          class="d-flex d-sm-none white--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title id="bar_title">Muslim panel</v-toolbar-title>

     <!--  <v-col cols="4" md="4" class="d-flex d-sm-none">
          <v-form>
            <v-text-field class="rounded outlined">
              
            </v-text-field>
          </v-form>
      </v-col> -->

      <v-spacer></v-spacer>

      <v-icon color="white">mdi-magnify</v-icon>&nbsp;&nbsp;&nbsp;
      <v-icon color="white">mdi-account</v-icon>

    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer"
      app
      style="color:white"
    >
      <v-img src="https://preview.pixlr.com/images/800wm/1439/2/1439104804.jpg" class="pa-4">
        <div class="text-center">
          <v-avatar
            class="mb-4 float-center"
            color="grey-darken-1"
            size="85"
            style="z-index: 0;"
          >
            <v-img  src="../../assets/user.png" style="border:2px solid green;z-index: 0;" alt="profile image"></v-img>
            
          </v-avatar>

          <div id="online_sign"></div>

          <div class="white--text"><b>Bikman djuma</b></div>
        </div>

      </v-img>

      <v-divider></v-divider>

      <v-list>
        
        <v-list-item v-for="[icon,text] in links" :key="icon">
          <template>
            <v-icon>{{ icon }}</v-icon>
          </template>&nbsp;
          <v-list-item-title :class="link">{{ text }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-form @submit="logoutfn">
              <v-btn color="info" type="submit"><v-icon>mdi-lock</v-icon> Logout</v-btn>
          </v-form>
        </v-list-item>


      </v-list>

    </v-navigation-drawer>

    <v-main 
      class="grey"
    >
      <v-container
        class="py-8 px-6 text-center"
        fluid
      >

          <h2>content goes here ! {{ info }}</h2>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name:'UserIndex',
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer:true,
      link:'main_links',
      links: [
        ['mdi-microsoft-windows', 'Dashboard'],
        ['mdi-account-group', 'All muslim'],
        ['mdi-cogs', 'Activity'],
        ['mdi-phone', 'Contact us'],
      ],

      info:[],

    }),

    methods:{
      async logoutfn(e){
        e.preventDefault()
        localStorage.removeItem("user-token")
        this.$router.push({name:'HomePage'});
      },

      async getUserData(){
        const userapi=await fetch("http://localhost:8000/api/user/info");
        const res=await userapi.json();
        // this.inf=res;
        console.log(res);
      },

      async protectRoute(){
          let user_token=localStorage.setItem("user-token");
          if (!user_token) {
              this.$router.push({name:'HomePage'});
          }
      },

    },

    mounted(){
      this.getUserData(),
      this.protectRoute()
    }

  }
</script>


<style>
  #bar_title{
    display: relative;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }

  .main-links:hover{
    cursor: pointer;
  }

  #online_sign{
    display:absolute;
    background-color: steelblue;
    width:20px;
    height:20px;
    border-radius: 50%;
    margin-top: -35px;
    margin-left:130px;
    z-index:100;
  }
</style>