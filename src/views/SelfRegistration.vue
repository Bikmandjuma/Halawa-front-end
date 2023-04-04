<template>
	<v-app>
		<v-app-bar app class="info" height="70">
			<v-app-bar-nav-icon
				@click="drawer=true"
				color="white"
				class="d-flex d-sm-none"
			></v-app-bar-nav-icon>
			<v-btn text color="white"><v-icon>mdi-mosque</v-icon>&nbsp;<h4>Halawat&nbsp;al-iman</h4></v-btn>

			<v-spacer></v-spacer>

			<v-tabs
				v-model="tab" align-with-title class="d-none d-sm-flex" id="tabs_nav" style="margin-top:40px;"
			>
				<tab><v-icon>mdi-undo</v-icon>&nbsp;<router-link to="/" color="white">Go to halawat homepage</router-link></tab>
			</v-tabs>

		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			fixed
			temporary
		>
			<v-list
				dense
				nav
			>
				<v-list-item-group><h4><b><v-icon color="primary">mdi-mosque</v-icon>&nbsp;Halawat al-iman</b></h4><br><v-list-item><router-link to="/"> <v-icon color="primary" class="main-link">mdi-home</v-icon>Home</router-link></v-list-item></v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		
		<v-container fluid mt-15>
			
			<v-col cols="12" md="12" sm="12" class="text-center">
				<div v-if="false">
					<h2><v-icon>mdi-information</v-icon> Fill this form please !</h2>					
					<v-card class="elevation-12">
						<v-form>
							<v-row id="reg_form">
								<v-col cols="12" md="4" sm="4">
									<v-text-field
										label="Firstname"
										placeholder="Enter your firstname"
										prepend-inner-icon="mdi-account"
									></v-text-field>
								</v-col>
								<v-col cols="12" md="4" sm="4">
									<v-text-field
										label="Lastname"
										placeholder="Enter your lastname"
										prepend-inner-icon="mdi-account"
									></v-text-field>
								</v-col>
								<v-col cols="12" md="4" sm="4">
									<v-select
										label="Gender"
										prepend-inner-icon="mdi-account"
										:items="items"
									></v-select>
								</v-col>
								<v-col cols="12" md="4" sm="4">
									<v-text-field
										label="Phone"
										placeholder="Enter your phone number"
										prepend-inner-icon="mdi-phone"
									></v-text-field>
								</v-col>
								<v-col cols="12" md="4" sm="4">
									<v-text-field
										label="Email"
										placeholder="Enter your email"
										prepend-inner-icon="mdi-email"
									></v-text-field>
								</v-col>
								<v-col cols="12" md="4" sm="4">
									<v-select
										label="Student status"
										prepend-inner-icon="mdi-book"
										:items="StillStudies"
									></v-select>
								</v-col>

								<v-col cols="12" md="12" sm="12">
									<v-row>
										<v-col cols="12" md="4" sm="4">
											<v-select
												label="Task (Role)"
												prepend-inner-icon="mdi-cogs"
												:items="roles"
											></v-select>
										</v-col>

										<v-col cols="12" md="4" sm="4">
											<v-file-input
												label="Profile image"
												type="file"
												placeholder="select image please . . ."
											></v-file-input>
										</v-col>

										<v-col cols="12" md="4" sm="4">
											<v-btn color="info"><v-icon>mdi-content-save</v-icon>&nbsp;Submit info</v-btn>
										</v-col>
									</v-row>
								</v-col>

								<!-- <v-col cols="12" md="4" sm="4">3</v-col> -->
							</v-row>
						</v-form>
					</v-card>
				</div>
				<div v-else-if="true">
					<h2>Ooops sorry , form not appeared</h2><br />
					<p>Form is disabled by Amir ,tell him to enable it </p>

					<br />

					<p>You can get him on one of these addresses&nbsp;<v-icon>mdi-hand-pointing-down</v-icon></p>
					<br />
					<div v-for="test in test" :key="test.id">
							<div v-for="cool in test" :key="cool.id">
								<div v-if="cool.study_status == 'Graduated' && cool.role == 'Imam'">

										<a :href="'tel:+25'+cool.phone"><v-icon color="info">mdi-phone</v-icon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a :href="'https://wa.me/'+cool.phone"><v-icon color="info">mdi-whatsapp</v-icon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a :href="'mailto:'+cool.email"><v-icon color="info">mdi-email</v-icon></a>

								</div>

							</div>
					</div>
					{{ test }}
					
				</div>

			</v-col>		
		
		</v-container>
		
	</v-app>
</template>

<script>
	export default{
		name:'ViewSelfRegistration',
		data(){
			return {
				drawer:false,
				tab:null,
				test:[],
				items:[
					'Male',
					'Female',
				],

				StillStudies:[
					'Still studying',
					'Already Graduated',
				],

				roles:[
					'Amir',
					'Naib amir',
					'Mudirat',
					'Naib Mudirat',
					'Dawati',
					'Imam',
					'Bilal',
					'Ustaz',
					'Accountant',
					'Secretariat',
					'Maamuma (usual muslim)',
					'Other',
				]
			}
		},

		methods:{
			async testfn(){
				const api=await fetch("http://localhost:8000/api/ViewAllMuslims");
				const res=await api.json();
				this.test=res;
			}
		},

		mounted(){
			this.testfn()
		}
	}
</script>

<style scoped>
   #tabs_nav tab:hover{
    color:black;
    cursor: pointer;
  }
 
  #tabs_nav a{color:white;}
  #tabs_nav a:hover{color:grey;}
  #tabs_nav a:link{color: white;}

  #tabs_nav{
    margin-top:0px;
    margin-left: 300px;
    text-decoration-line: none;
  }

  a{text-decoration:none;color:white;}

</style>