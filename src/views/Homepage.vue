<template>
  <div class="homepage">
    <div class="containGuidlines">
      <div class="header">
        <h1>You can monitor the machine with this solution.</h1>
      </div>
      <div class="solution">
        <span>1. Scan QR Code in below and download <br> application
    of the camera. <br>2. Config this parameter
        </span>
      </div>
    <div class="param">
      <span>
        <br> Username : fram17.fra631@gmail.com <br> Password  : fra631 
      </span>
    </div>
    <div class="qrCode">
      <img class = "qrApp" src="../assets/apple.png" alt="appleApp">
      <img src="../assets/android.png" alt="androidApp" class="qrApp">
    </div>
    <div class="track">
      <img class = "trackApp" src="../assets/2.png" alt="appleApp">
      <img src="../assets/1.png" alt="androidApp" class="trackApp">
    </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {};
  },
};
</script>

<style>
.homepage{
  width: 100%;
  height: 100%;
  display: flex;
}

.containGuidlines{
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: #E6E6E6;
  border-radius: 44px;
  box-shadow: 0px 0px 21px -2px rgba(0, 0, 0, 0.4);
  display: flexbox;
  
  padding: 20px;
}

.header{
  width: 90%;
  margin: 20px auto 20px auto;
  border: solid 3px;
  border-color: #FF7700;
  border-radius: 15px;
}

.containGuidlines{
  margin: auto;
}

.containGuidlines h1{
  text-align: center;
  padding: 4px;
  font-size: 25px;
  color: #FF7700;
}

.containGuidlines span{
  font-size: 20px;
  color: #8F9092;
  text-align: left;
  line-height: 35px;
  white-space: pre-wrap;
}

.solution{
  display: flex;
  justify-content: center;
}

.param{
  display: flex;
  justify-content: center;
  
}

.param span{
  font-size: 22px;
  font-weight: 700;
  color: rgb(0, 0, 0);
  text-align: left;
  line-height: 35px;
  white-space: pre-wrap;
}

.qrCode{
  margin: 25px auto;
  width: 350px;
  display: flex;
  justify-content: space-between;
  
}

.track{
  margin: 0px auto;
  width: 370px;
  display: flex;
  justify-content: space-between;
}

.trackApp{
  width: 150px;
  filter: opacity(100%);
}

.qrApp{
  width: 130px;
  filter: opacity(55%);
}

</style>
