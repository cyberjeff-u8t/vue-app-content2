<template>
<div id="app">
    
      <v-container fluid>
     <v-row align='end'>
       <v-col class="text-center" >
       <h1>Hello From VueJS</h1>
       </v-col>
     </v-row>     
    <v-row >
      <v-col class="text-center" cols="12">
        <div class="my-2">
          <v-btn small>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn small disabled>Disabled</v-btn>
        </div>
      </v-col>
    </v-row>
      </v-container>
    
</div>

</template>
<script>

export default {

  name: 'AppContent2',

  props:{
  
  },
 
  data: () => ({
    
  }),
}

</script>   

<style>
    html { overflow-y: auto }
</style>



