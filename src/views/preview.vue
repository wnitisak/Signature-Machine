<template>
  <div class="preview">
    <div class="contain">
      <div class="header">
        <h1>SVG Picture preview.</h1>
      </div>
    </div>
    <div class="imageSvgPreview-contain">
      <h1 v-show="this.$store.getters.getImageUrlSVG == null">
        SVG<br />PREVIEW
      </h1>
      <img
        class="imageSvgPreview"
        v-if="$store.getters.getImageUrlSVG != null"
        :src="$store.getters.getImageUrlSVG"
        alt="imageSvgPreview"
      />
    </div>
  </div>
  
</template>

<script>
export default {
  name: "preview",
  data() {
    return {};
  },
};
</script>

<style>
.preview{
  width: 100%;
  height: 100%;
  display: flex;
}

.contain{
  width: 800px;
  height: 600px;
  margin: auto;
  background-color: #E6E6E6;
  border-radius: 44px;
  box-shadow: 0px 0px 21px -2px rgba(0, 0, 0, 0.4);
  display: flexbox;
  position: fixed;
  padding: 20px;
  top: 50%;
  right: 25%;
  transform: translateX(50%) translateY(-50%);
  z-index: 70;
}

.header{
  width: 90%;
  margin: 20px auto 20px auto;
  border: solid 3px;
  border-color: #FF7700;
  border-radius: 15px;
}

.header h1{
  text-align: center;
  padding: 4px;
  font-size: 25px;
  color: #FF7700;
}

.imageSvgPreview-contain {
  width: 40%;
  height: 28em;
  border: 2em;
  border: solid 3px;
  border-color: rgb(151, 151, 151);
  border-radius: 3px;
  margin: 50px auto 0 auto;
  display: flex;
  position: fixed;
  top: 50%;
  right: 25%;
  transform: translateX(50%) translateY(-50%);
  z-index: 95;
}

.imageSvgPreview-contain h1 {
  margin: auto;
  z-index: 90;
  font-size: 5em;
  color: rgb(151, 151, 151);
  text-align: center;
  z-index: 95;
}

.imageSvgPreview {
  position: relative;
  height: 100%;
  margin: auto;
  aspect-ratio: 1;
  z-index: 95;
}

</style>
