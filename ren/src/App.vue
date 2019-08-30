<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
   *{
     padding: 0;
     margin: 0;
     list-style: none;
     box-sizing: border-box;
     text-decoration: none;
     color: black
   }
   html,body{
     width: 100%;
     height: 100%;
   }
   #app{
     width: 100%;
     height: 100%;
   }
</style>
