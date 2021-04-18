<template>
  <div id="Portfolio" style="background: black;">
    <!-- <center> -->
      <header >
        <a-row class="box_menu_bar" >
          <!-- <a-row> -->
            <a-col :xs ="9" style="text-align: left;">
              <img src="../assets/name.png" style="width:50%; margin: 5px 80px;">
            </a-col>
            <a-col :xs ="15">
              <menu mode="horizontal" theme="dark" :default-selected-keys="['1']" :style="{ lineHeight: '60px',}" class="text_menu " id="mySidebar" >
                <label class="box_menu"> <a href="#about_us">ABOUT US</a></label>
                <label class="box_menu" > <a href="#education">EDUCATION</a></label>
                <label class="box_menu" > <a href="#experience">EXPERIENCE</a></label>
                <label class="box_menu" > <a href="#skills">SKILLS</a></label>
                <label class="box_menu" > <a href="#references">REFERENCES</a></label>
                <label class="box_menu" > <a href="#follow">FOLLOW US</a></label>
              </menu>
            </a-col>
          <!-- </a-row> -->
        </a-row>
        <a-row style="text-align:left; padding-left: 40px ; padding-top: 100px ;">
          <img src="../assets/conceptual-flat-vector.png" style="width:40%;">
          <div class="block_name">
            <p style="font-size:60px; color:sienna; margin:0;"><b>Nutchanart Maautsa</b></p>
            <p style="font-size:30px; color:black; ">Frontend developer </p>
          </div>
        </a-row>
      </header>
      <a-row id="summary" style="padding: 30px; background: turquoise;">
        <p style="color:white; font-family: ocr a; font-size:50px; margin:0;"> <b>Summary</b></p>
        <div class="text_box_sum" >
          <p>Hello name is Nutchanart Maautsa age 23 years. Graduated from naresuan university Computer Science. Interested in working in a Frontend developer and want to learn a new language. Not studied </p>
        </div>
      </a-row>

      <!-- about_us -->
      <a-row id="about_us">
        <a-col :xs="10" style="background-color:white;">
          <img src="../assets/nig3.jpg" width="80%" >
        </a-col>
        <a-col :xs="14" style="padding-top:100px;">
          <p style="font-size:50px; font-family: ocr a; margin:0; padding: 30px 145px; color: turquoise; text-align:left;"><b>About us</b></p>
          <a-row class="text_box_us">
            <a-row>
              <a-col :xs="4"> <label >Name : </label> </a-col>
              <a-col :sm="20"> <label >Nutchanart Ma-autsa</label></a-col>
            </a-row>
            <a-row>
              <a-col :xs="5"> <label >Nickname : </label> </a-col>
              <a-col :sm="19"> <label >Nig</label></a-col>
            </a-row>
            <a-row>
              <a-col :xs="7" :sm="7" > <label >Date of birth : </label> </a-col>
              <a-col :sm="17"> <label >29 March 1998 </label></a-col>
            </a-row>
            <a-row>
              <a-col :xs="4"> <label >Age : </label> </a-col>
              <a-col :sm="20"> <label >23 y </label></a-col>
            </a-row>
            <a-row>
              <a-col :xs="5"> <label >Address : </label> </a-col>
              <a-col :sm="19"> <label >58 Ban huaima, Mueang Phrae, Phrae 54000</label></a-col>
            </a-row>
            <a-row>
              <a-col :xs="4"> <label >Email : </label> </a-col>
              <a-col :sm="20"> <label >nick-nootchanrd@hotmail.co.th</label></a-col>
            </a-row>
            <a-row>
              <a-col :xs="4"> <label >Phone :</label> </a-col>
              <a-col :sm="20"> <label >0931988437</label></a-col>
            </a-row>
          </a-row>
        </a-col>
      </a-row>

      <!-- education -->
      <center>
      <a-row id="education" style="background-color:white; font-family: monospace; padding:30px;">
        <p><b style="font-size:50px; font-family: ocr a; color:black; ">Education</b></p>
        <a-row style="margin-top:20px;">
          <a-col :xs="7" class="box_ed" style="margin: 0 30px; ">
            <div style="width: 400px; height: 350px; padding:30px 2px;">
              <p class="text_20xx">2017</p>
              <a-row class="text_bd">
                <p> Bachelor's degree at Naresuan University.</p>
                <p> ( Computer Science ) </p>
              </a-row>
            </div>
          </a-col>
          <a-col :xs="7" class="box_ed" style="margin: 0 30px;">
            <div style="width: 400px; height: 350px; padding:30px 2px;">
              <p class="text_20xx">2011</p>
              <a-row  class="text_bd">
                <p> High School at HuaimaWittayakom.</p>
                <p> ( Mathematics-Science ) </p>
              </a-row>
            </div>
          </a-col>
          <a-col :xs="7" class="box_ed" style="margin: 0 30px;">
            <div style="width:400px; height: 350px; padding:30px 2px;">
              <p class="text_20xx">2005</p>
              <a-row  class="text_bd">
                <p> Elemantary School at Banhuaima.</p>
              </a-row>
            </div>
          </a-col>
        </a-row >
      </a-row>
      </center>

      <!-- experience -->
      <a-row id="experience" >
        <p style="font-size:50px; font-family: ocr a; color:white; ">Experience</p>
        <a-tabs default-active-key="1" @change="callback" style="width:80%; margin:10px 130px; ">
          <a-tab-pane  key="1" tab="2021" >
            <a-row class="box_ex text_ex">
              <a-col :xs='5' style="padding: 60px;">
                <p style="font-size:50px; font-family: ocr a; margin: 0; color:turquoise;">2021</p>
              </a-col>
              <a-col :sm='18' class="text_ex ">
                <p style="background-color:turquoise; color:black;"><b>COOPERATIVE EDUCATION UNIVERSITY</b></p>
                <p style="margin: 0;" >Dec, 2020 - Mar, 2021 / Bangkok</p>
                <p>Cooperative Education as a assistant programmer at Absolute Solution. And develop Maintenance system transport vehicles.</p>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane style="font-size:50px; font-family: ocr a; margin: 0; color:turquoise;" key="2" tab="2021" force-render>
            <a-row class="box_ex">
              <a-col :xs='5' style="padding: 60px;">
                <p style="font-size:50px; font-family: ocr a; margin: 0; color:turquoise;">2021</p>
              </a-col>
              <a-col :sm='19' class="text_ex ">
                <p style="background-color:turquoise; color:black;"><b>THE 9TH ASIA UNDERGRADUATE CONFERENCE ON COMPUTING</b></p>
                <p style="margin: 0;">Feb, 2021 / Bangkok</p>
                <p>Get an Excellent paper awards. Project name Development of English Alphabets Finger Spelling Practicing System with Computer Vision.</p>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane style="font-size:50px; font-family: ocr a; margin: 0; color:turquoise;" key="3" tab="2017-2013">
            <a-row class="box_ex">
            <a-col :xs='6' style="padding: 95px 0px;">
              <p style="font-size:50px; font-family: ocr a; margin: 0; color:turquoise;">2017-2013 </p>
            </a-col>
            <a-col :sm='18' class="text_ex ">
              <p style="background-color:turquoise; color:black;"><b>PART-TIME</b></p>
              <p style="margin: 0;">2017 / Bangkok</p>
              <p>Working  at 7-eleven about 3-4 months.</p>
              <p style="margin: 0;">2013 / Bangkok</p>
              <p>Working gas station attendant about 2-3 months.</p>
            </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </a-row>

      <!-- skills -->
      <center>
      <a-row id="skills" style=" padding:30px 20px; background-color:turquoise;">
        <p style="font-size:50px; font-family: ocr a; color:black; margin-bottom: 10px;"><b>Skills</b></p>
        <a-row style="margin:40px 0;">
          <a-col :xs='6'>
            <div class="circle_skill">
              <label >Vue.js</label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div  class="circle_skill">
              <label >JavaScript </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div class="circle_skill" style="padding: 5px 0px;">
              <label > Java (spring) </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div class="circle_skill" style="padding: 15px 0px;">
              <p style="margin:0; font-size: 27px;">HTML&CSS /</p>
              <p style="font-size: 25px; ">Bootstrap</p>
            </div>
          </a-col>
        </a-row>
        <a-row style="margin-bottom:20px;">
          <a-col :xs='6'>
            <div class="circle_skill">
              <label > Kotlin </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div class="circle_skill">
              <label > Python </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div class="circle_skill" >
            <label >  My SQL </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div  class="circle_skill" >
              <label > JQuery </label>
            </div>
          </a-col>
        </a-row>
        <a-row style="margin-bottom:40px;">
          <a-col :xs='6'>
            <div class="circle_skill" >
              <label > Git </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div class="circle_skill" style="padding: 5px 0px;">
              <label style="margin:0; font-size: 27px;" > Microsoft Office </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div class="circle_skill" style="padding: 5px 0px;">
            <label style="margin:0; font-size: 27px;" > Adobe Photoshop </label>
            </div>
          </a-col>
          <a-col :xs='6'>
            <div  class="circle_skill" style="padding: 5px 0px;">
              <label style="font-size: 27px;"> Adobe Illustrator </label>
            </div>
          </a-col>
        </a-row>
      </a-row>
      </center>
      
      <!-- references -->
      <div style="border:8px solid turquoise;">
      <a-row id="references" >
        <p style="font-size:50px; font-family: ocr a; margin:20px 150px 0px 150px; color:turquoise;"><b>References us</b></p>
        <a-row style="padding:0px;">
          <a-row style="margin-left:20px;">
            <img src="../assets/profile.png" style="width:12%; margin:0;" >
          </a-row>
          <a-row class="text_box_rus"> 
            <a-row>
              <a-col :sm="4"> <label >Name : </label> </a-col>
              <a-col :sm="20"> <label >Mr.Wuttipong Ruanthong </label></a-col>
            </a-row>
            <a-row>
              <a-col :sm="4"> <label >Email : </label> </a-col>
              <a-col :sm="20"> <label >wuttipongr@nu.ac.th </label></a-col>
            </a-row>
            <a-row>
              <a-col :sm="4"> <label >Phone : </label> </a-col>
              <a-col :sm="20"> <label >0936599322 </label></a-col>
            </a-row>
          </a-row>
        </a-row>
      </a-row>

      <!-- follow -->
      <a-row style="border:1px solid turquoise; " id="follow">
        <a-col :sm='8'>
          <p style="font-size:50px; font-family: ocr a; margin:10px 0; color:white;">Follow Us</p>
        </a-col>
        <a-col :sm='16'>
          <a-row style="padding: 20px;" >
            <a-col :xs="11" style="text-align:left;">
              <a href="https://github.com/nutchanart-nig" title="Github"><a-icon type="github" style="font-size: 50px; color:turquoise;" /></a>
              <label class="text_follow">https://github.com/nutchanart-nig</label>
            </a-col>
            <a-col :xs="13" style="text-align:left;">
              <a href="https://hotmail.com/nick-nootchanrd@hotmail.co.th" title="Email"><a-icon type="mail" style="font-size: 50px; padding-left:40px; color:turquoise;" /></a>
              <label class="text_follow">https://hotmail.com/nick-nootchanrd@hotmail.co.th</label>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      </div>
  </div>
</template>

<script>

export default { 
  name: "portfolio",
  data(){
    return{
    };
  },
  mounted: {
    callback(key) {
      console.log(key);
    }
  }
}
</script>
<style scoped>
a{
  color: aliceblue;
}
a:hover{
  color: yellow;
}
.container-slider{
  display: flex;
}
.img-slider{
  width: 100%;
  height: auto;
}
.block_name{
  box-shadow: 10px 10px 10px 5px rgba(122, 122, 122, 0.61);
  background-color:rgba(252, 204, 133, 0.925);
  font-family: ocr a;
  position: absolute;
  bottom: 70px;
  right: 30px;
  padding: 15px;
}
.box_menu{
  border: 2px solid  aquamarine;
  padding: 10px;
  border-radius: 10%;
}
.box_menu_bar{
  position:fixed;
  z-index:150;
  background-color:black ;
}
ิ.box_sum{
  background: red;
  height: 100px;
}
.box_ed{
  box-shadow:10px 10px 10px 5px rgb(53 54 54 / 62%);
  /* background: black; */
  background: black;
}
.text_menu{
  font-size:20px;
  font-family:monospace;
  text-align: center;
}
.text_box_sum{
  font-size: 22px;
  text-align:left;
  padding: 0;
  color:white;
  font-family: ocr a;
}
.text_box_us{
  font-size: 22px;
  text-align:left;
  padding: 0 30px 0px 145px;
  color:white;
  font-family: ocr a;
}
.text_box_rus{
  font-size: 26px;
  margin: 30px 0px 20px 550px;
  color:white;
  font-family: ocr a;
  text-align:left;
}
.text_20xx{
  color:white;
  font-size: 50px;
}
.text_bd{
  color: aliceblue;
  position: relative;
  width: 400px; 
  height: 150px;
  background: rgb(206 211 211 / 19%);
  padding: 20px;
  font-size: 22px;
  margin: 0;
  border-radius: 40px;
}
.text_ex{
  font-size: 25px;
  color: white;
  /* text-align: left; */
  padding: 20px 0;
  font-family: monospace;
  text-align-last: 15px;
}
.box_ex{
  text-align: left;
  height: 100%;
  width: 100%;
}
.circle_skill{
  color: turquoise;
  background-color:black ;
  border-radius: 10% ;
  padding: 30px 0px;
  width: 200px;
  height: 110px;
  font-size: 32px;
  font-family: ocr a;
}
.circle_skill:hover{
  color: black;
  background-color: white;
  border: 2px solid turquoise ;
}
.circle_ex{
  background-color:turquoise ;
  width: 200px;
  height: 200px;
  border-radius:100% ;
}
.ant-tabs{
  font-family: ocr a; 
  margin: 30px; 
  color:turquoise;
}
.ant-tabs-tab-active .ant-tabs-tab{
  color:white;
}
.text_follow{
  font-family: monospace;
  font-size: 15px;
  color: white;
  padding-left: 20px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
}
</style>


