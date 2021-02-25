<template>
  <div id="app">
    <v-commonMenu></v-commonMenu>
    <div class="app-body">
      <router-view/>
    </div>
    <div class="app-footer">
      <v-footer></v-footer>
    </div>

  </div>
</template>

<script>
import commonMenu from '@/components/common/Menu'
import footer from '@/components/common/Footer'
export default {
  name: 'App',
  components:{
    'v-commonMenu':commonMenu,
    'v-footer':footer
  }
}
</script>

<style>
body{
  margin: 0px;
}
.app-body{
  background-color: #f8f9fa!important;
  min-height: 600px;
}
.app-footer{
  padding: 10px 0px 10px 0px;
}


</style>
