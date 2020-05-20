<template>
  <div class="progressBar">
      <div class="progressInner" :style="`width: ${progress}%`">
          <span>Upload Complete {{progress}}%</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'progressBar',
    data(){
        return{

        }
    },
    methods:{

    },
    props: [
        'progress'
    ]
}
</script>

<style>
    .progressBar{
        margin: 0 auto;
        width: 80%;
        height: 20px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
    }
    
    .progressInner{
        height: 100%;
        background-image: linear-gradient(to right, #ed008d, #2484e4);
        border-radius: 10px;
        display: flex;
    }

    .progressInner span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 1em;
        color: #313131;
    }

</style>