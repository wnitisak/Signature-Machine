<template>
  <div id="app">
    <header>
      <a href="/"><img  class="logo" v-bind:src="image.logoFibo" alt="logo" /></a>
      <nav>
        <ul class="nav__link">
          <a href="/preview"  >Preview</a>
          <a @click="showGuideline = true">How to use?</a>
          <a @click="showAbout = true">About us</a>
        </ul>
      </nav>
    </header>
    <modalPopup 
      :show = showGuideline 
      @getState = "showGuidelineState" 
      title = "How to use the machine?" 
      content = "1. Choose image type Picture or Signature
2. Choose file to upload
3. Click upload button
4. Scan QRcode to install ip camera
5. Fill in username and password to watch the ip camera." 
    />
    <modalPopup 
      :show = showAbout 
      @getState = "showAboutState" 
      title = "About us" 
      content = "                  1. Mr.Jaroonwit Lelachaicharoenpan
                  2. Mr.Chaiwat Phapisarn
                  3. Mr.Naritpon Chavitranurak
                  4. Mr.Nitisak Worrasittichai
                  5. Mr.Apirak Sombat

      King Mongkut's University of Technology Thonburi, 
                                          (FIBO, KMUTT)
    Adress : 126 Pracha Uthit Rd., Bang Mod, Thung Khru, 
                  Bangkok 10140, Thailand
                                        Tel: 0-2470-8000"
    />
    <div class="content">
      <div class="leftSide">
        <uploadImage />
      </div>
      <div class="rightSide">
          <router-view></router-view>
      </div>
    </div>
    <footer>
      <div class="foot">
        <span>@2020 Institute of Field Robotics, KMUTT. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
import uploadImage from "@/components/uploadImage";
import modalPopup from '@/components/modalPopup';


export default {
  name: "app",
  data() {
    return {
      showGuideline: false,
      showAbout: false,
      image: {
        logoFibo: require("@/assets/logo_fibo.png"),
      },
    };
  },
  methods: {
    showGuidelineState(state){
      this.showGuideline = state;
    },
    showAboutState(state){
      this.showAbout = state;
    },
  },
  components: {
    uploadImage,
    modalPopup
  },
  mounted() {
  },
};
</script>

<style>
@import url(./css/app.css);
</style>
