<template>
  <div class="home">
    <!-- <p><b class="text" style="font-family: ocr a;">Portfolio</b></p> -->
    <Portfolio msg="Welcome to Your Portfolio" />
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "Home",
  components: {
    Portfolio
  },
  data(){
    return{
      // activeBtn = 'btn1'
    }
  }
};
</script>
<style scoped>
body{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a{
  color: crimson;
}
.text{
  color: aqua;
  font-size: 70px;
}
.bt{
  color: aqua;
  
}

</style>
