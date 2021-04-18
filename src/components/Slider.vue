<template>
  <div id="slider">
    <div id="slider">
      <a-icon type="left-circle" class="bt bt-left" @click="prev" />
      <div class="container-slider">
        <img src="../assets/nig1.jpg" class="img-slider">
        <img src="../assets/nig2.jpg" class="img-slider">
        <img src="../assets/nig4.jpg" class="img-slider">
      </div>
      <a-icon type="right-circle" class="bt bt-right" @click="next"/>
    </div>
    <div class="img">
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'slider',
  data(){
    return {
      index : 0
    }
  },
  mounted: {
    next() {
      console.log(this.index);
      if(this.index === -1500) {

        this.index = 0;
      } else {
        this.index -= 500;
      }
    },
  prev(){
    if(this.index === 0){
      this.index = -1500;
    }else{
      this.index += 500;
    }
  }
  }
}
</script>
<style scoped>
.slider{
  /* width: 800px; */
  height: 300px;
  overflow: hidden;
  position: relative;
}
.container-slider{
  display: flex;
}
.img-slider{
  width: 100%;
  /* height: auto; */
}
.bt{
  outline: none;
  border: none;
  display: block;
  display: flex;
  z-index: 1000;
  justify-self: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  transition: 0.6s ease;
  /* color: white; */
  color: aqua;
  font-size: 30px;
}
.bt-left{
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}
.bt-right{
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
.bt-left:hover{
  color: gold;
}
.bt-right:hover{
  color: gold;
}
</style>