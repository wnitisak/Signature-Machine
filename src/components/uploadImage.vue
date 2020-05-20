<template>
  <div id="uploadImage">
    <!-- <custom-cropper></custom-cropper> -->
    <div class="imagePreview-contain">
      <h1 v-show="this.$store.getters.getImageUrlJPEG == null">
        IMAGE<br />PREVIEW
      </h1>
      <img
        class="imagePreview"
        v-if="$store.getters.getImageUrlJPEG != null"
        :src="$store.getters.getImageUrlJPEG"
        alt="imagePreview"
      />
    </div>
    <progressBar :progress="uploadValue" />
    <div class="checkboxType">
      <label class="container"
        >Picture
        <input type="radio" name="radio" v-model="radio" value="Picture" />
        <span class="checkmark"></span>
      </label>
      <label class="container"
        >Signature
        <input type="radio" name="radio" v-model="radio" value="Signature" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="upload">
      <input
        type="file"
        name="uploadSelected"
        id="uploadSelected"
        @change="uploadSelected"
      />
    </div>
    <div class="buttonContain">
      <button class="uploadButton" @click="onUpload">UPLOAD</button>
      <button class="uploadButton" @click="resetData">RESET</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import ProgressBar from "@/components/ProgressBar";
// import CustomCropper from '@/components/CustomCropper.vue';

export default {
  name: "uploadImage",
  data() {
    return {
      radio: "Picture",
      uploadValue: 0,
      selectedFile: null,
    };
  },
  methods: {
    uploadSelected(event) {
      this.uploadValue = 0;
      this.$store.dispatch("putImageUrlJPEG", null);
      console.log(
        event.target.files[0].name,
        this.$store.getters.getImageUrlJPEG
      );
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      this.$store.dispatch("putImageName", this.selectedFile.name);
    },

    onUpload() {
      if (this.radio == "Signature") {
        this.$store.dispatch("putImageUploadFolder", "Signature/");
        console.log("Signature");
      } else {
        this.$store.dispatch("putImageUploadFolder", "Picture/");
        console.log("Picture");
      }
      
      const storageRef = firebase
      .storage().ref(
          this.$store.getters.getImageUploadFolder +
            '1.jpg'
        ).put(this.selectedFile);
      const databaseRef = firebase.database();
      const messageRef = databaseRef.ref("message");
      storageRef.on(
        "state_changed",
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(this.uploadValue);
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          var d = new Date();
          this.$store.dispatch(
            "putImageTimeStamp",
            d.getHours() + ":" + d.getMinutes()
          );
          console.log(
            "Upload Time Stamp: " + this.$store.getters.getImageTimeStamp
          );
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.$store.dispatch("putImageUrlJPEG", url);
            console.log(
              "File available at: " + this.$store.getters.getImageUrlJPEG
            );
            messageRef.push({
              Name: this.$store.getters.getImageName,
              UrlJPEG: this.$store.getters.getImageUrlJPEG,
              timeStamp: this.$store.getters.getImageTimeStamp,
              uploadFolder: this.$store.getters.getImageUploadFolder,
            });
            
            const storageRef2 = firebase.storage().ref("SVG/1.svg")
            storageRef2.getDownloadURL().then((url) => {
            this.$store.dispatch("putImageUrlSVG", url);
            console.log(
              "File available at: " + this.$store.getters.getImageUrlSVG
            );
            });
            setTimeout(function(){
              window.location.href = '/preview'
            },2000)
          });
        }
      );
    },

    resetData() {
      this.$store.dispatch("putImageName", "file Selected");
      this.$store.dispatch("putImageUrlJPEG", null);
      this.$store.dispatch("putImageUrlSVG", null);
      this.$store.dispatch("putImageUploadStatus", "");
      this.$store.dispatch("putImageTimeStamp", "");
      this.$store.dispatch("putImagePreviewAddress", null);
      this.$store.dispatch("putImageUploadFolder", "");
      this.uploadValue = 0;
    },
  },

  components: {
    ProgressBar,
    // CustomCropper
  },
};
</script>

<style>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  margin: 0 20px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: rgb(255, 255, 255);
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.imagePreview-contain {
  width: 80%;
  height: 28em;
  border: 2em;
  border: solid 3px;
  border-color: rgb(151, 151, 151);
  border-radius: 3px;
  margin: 50px auto 0 auto;
  display: flex;
  z-index: 95;
}

.imagePreview-contain h1 {
  margin: auto;
  z-index: 90;
  font-size: 5em;
  color: rgb(151, 151, 151);
  text-align: center;
  z-index: 95;
}

.imagePreview {
  position: relative;
  height: 100%;
  margin: auto;
  aspect-ratio: 1;
  z-index: 95;
}

.uploadImage {
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.upload {
  display: flex;
  margin: 30px 0 0 0;
  justify-content: center;
}

.checkboxType {
  display: flex;
  margin: 40px 0 0 0;
  justify-content: center;
}

.checkboxPicture {
  margin: 0 10px;
}

.checkboxPicture .picture {
  margin: 0 10px;
}

.checkboxPicture span {
  font-size: 20px;
}

.checkboxSignature {
  margin: 0 10px;
}

.checkboxSignature .signature {
  margin: 0 10px;
}

.checkboxSignature span {
  font-size: 20px;
}

.uploadButton {
  display: inline-flex;
  margin: 0px 30px;
  height: 50px;
  width: 200px;
  background-color: #ff7700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  border: solid 2px;
  border-color: #ffffff;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  transition: all 0.3s ease 0s;
}

.uploadButton:hover {
  background-color: #ff9f4b;
  box-shadow: 6px 6px rgba(0, 0, 0, 0.4);
}

.buttonContain {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
</style>
