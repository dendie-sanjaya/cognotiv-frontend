<template>
  <div id="app" style="background-color: white;" >
    <NavBar />
    <router-view />
  </div>
</template>

<script type="text/javascript">
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar, // register component
  },
};
</script>