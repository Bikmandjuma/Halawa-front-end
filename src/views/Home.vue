<template>
	<v-app app>
		<v-app-bar app class="white" height="20">
        	<v-app-bar-nav-icon 
          		@click="drawer = true" 
          		class="d-flex d-sm-none"
            ></v-app-bar-nav-icon> 

           	<v-app-bar app class="white" height="20">
			<v-btn>
            	<v-icon>mdi-home</v-icon>Project-name
	   		</v-btn>
	        <v-spacer></v-spacer>
	        <v-btn text @click="scroll('home')">Home</v-btn>
	        <v-btn text @click="scroll('about')">About</v-btn>
	        <v-btn text @click="scroll('service')">Service</v-btn>
	        <v-btn text @click="scroll('contact')">Contact</v-btn>
    	</v-app-bar>       
        
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
			{{test}}
		</v-container>
	</v-app>
</template>
<script>
	// import {defineComponent} from 'vue'
	import AppNavBar from '@/components/Header.vue'

	export default{
		name:'HomePages',
		methods:{
		    scroll(refName){
		        const element=document.getElementById(refName);
		        element.scrollIntoView({behaviour:"smooth"});
		    }
	    },
		data(){
			return {
				test:'My home page'
			}
		},

		components:{
			AppNavBar,
		}
	}
</script>