<template>
  <div id="app">

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->


    <router-view></router-view>

    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->

    <router-view/>

  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app,
body,
html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
