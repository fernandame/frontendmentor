<template>
  <div class="flex justify-center items-center h-screen">
    <Card />
  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-size: 15px;
}

body {
  height: 100%;
  background-color: hsl(233, 47%, 7%);
}

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
