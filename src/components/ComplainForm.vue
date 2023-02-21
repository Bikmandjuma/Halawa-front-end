<template>
    <v-container style="margin-top:60px;margin-bottom:30px;">
          <v-card elevation="12">
            <v-form>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Amazina"
                    placeholder="Andika amazina yawe"
                    prepend-inner-icon="mdi-account"
                    style="margin-top: 10px;"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Telefone"
                    variant="solo"
                    placeholder="Andika nimero ya telefone yawe"
                    prepend-inner-icon="mdi-phone"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Email"
                    placeholder="Andika email yawe niba uyigira"
                    variant="filled"
                    prepend-inner-icon="mdi-email"

                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-textarea
                    label="Andika ikibazo"
                    placeholder="Placeholder"
                    variant="outlined"
                    rows="2"
                    prepend-inner-icon="mdi-pen"
                  ></v-textarea>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-select
                    label="Hitamo ubishinzwe"
                    :items="select"
                    prepend-inner-icon="mdi-account"
                    variant="plain"
                    style="margin-top:25px;"
                    id="complain_select"
                  ></v-select>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-file-input
                    label="Shiraho ifoto"
                    prepend-inner-icon="mdi-paper-clip"
                    style="margin-top:25px;"
                    id="complain_file"
                  ></v-file-input>
                </v-col>

                <v-row style="margin-bottom:5px;">
                  <v-col cols="12" sm="6" md="4"></v-col>
                  <v-col cols="12" sm="6" md="4" class="text-center">
                    <v-btn color="primary">Ohereza&nbsp;&nbsp;<v-icon>mdi-send</v-icon></v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4"></v-col>
                </v-row>

              </v-row>
        </v-form>
      </v-card>
    </v-container>
</template>

<script>

  export default{
    name:'ComplainForm',
    data(){
      return{
        select:['Etant civile','Education','DAAF','Bikman']
      }
      
    },

    methods:{
       
    },
  
  }

</script>

<style>
</style>