<template>
  <Card />
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
}

body {
  height: 100%;
  background-color: #0a0c1b;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
