<template>
  <div class="modalPopup">
      <transition name="fade" appear>
          <div class="modal-overlay" v-if="show" ></div>
      </transition>
      <transition name="slide" appear>
          <div class="modal" v-if="show">
            <h1>{{title}}</h1>
            <p>{{content}}</p>
            <button class="backButton" @click="showModalState">Close</button>
          </div>
      </transition>
      
  </div>
</template>

<script>
export default {
    name:'modalPopup',
    data(){
        return{
            state: null
        }
    },
    props:[
        "show",
        "title",
        "content"
    ],
    methods:{
        showModalState(){
            this.state = false;
            this.$emit("getState", this.state)
        }
    }
}
</script>

<style>

    * {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0,0,0,0.3);
    }

     .backButton{
        margin-left: 50%;
        transform: translateX(-50%);
        appearance: none;
        border: none;
        outline: none;
        background: none;
        cursor: pointer;

        color: rgb(243, 243, 243);
        font-size: 20px;
        font-weight: 700;
        display: inline-block;
        padding: 15px 25px;
        background-image: linear-gradient(to right,#ff7146, #ffbe6a);
        border-radius: 15px;
        box-shadow: 3px 3px  rgba(0,0,0,0.3);

        transition: 0.2s ease-out;
    }

    .backButton:hover{
        box-shadow: 4px 4px rgba(0,0,0,0.5);
    }

    .modal{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;

        width: 100%;
        max-width: 600px;
        background-color: rgb(255, 167, 141);
        border-radius: 26px;
        padding: 25px;
    }

    .modal h1{
        color: rgb(83,83,83);
        margin: 15px 0 10px 0;
        font-size: 2.5em;
        font-weight: 900;
    }

    .modal p{
        margin: 20px 0 15px 0;
        color: rgb(255, 255, 255);
        line-height: 30px;
        font-size: 20px;
        white-space: pre-wrap;
    }

    .fade-enter-active,
    .fade-leave-active{
        transition:  opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to{
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active{
        transition: transform 0.5s;
    }

    .slide-enter,
    .slide-leave-to{
        transform: translateY(-50%) translateX(100vw);
    }

</style>