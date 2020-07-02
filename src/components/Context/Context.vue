<template>
  <div class="context" ref="context">
      <div class="card" ref="card">
          <img @click="gx" ref="img" :src="imgurl">
      </div>
      <div @click='start' ref="text" class="text">
         <h3>Biu~~~~</h3>
      </div>
  </div>
</template>
<script>

import axios from 'axios'
export default {
    data() {
        return {
            height:{
                height:document.documentElement.clientHeight,
            },
            imgurl:''
        }
    },
    mounted() {
        // console.log(this.height.height)
        this.$refs.context.style.height = this.height.height-30-50 +'px',
        axios.get('http://api.btstu.cn/sjtx/api.php?lx=c1&format=json&method=mobile').then((res)=>{
            this.imgurl = res.data.imgurl
        }),
        this.imgdh()
    },
    methods:{

            // this.$refs.img.style.transform = 'rotate(360deg)'
            // this.$refs.img.style.transition = '1s all '
            imgdh(){
           var timer = setTimeout(() => {
                 this.$refs.card.style.opacity = 1
                 this.$refs.img.style.transform = 'rotate(360deg)'
                 this.$refs.img.style.transition = '1s all '
                 this.$refs.text.style.opacity = 1
                 this.$refs.text.style.transition = '1s all '

            },3000);
            },
            start(){
                this.$router.push({name:'bzimg'})
            },
            gx(){
                
                axios.get('http://api.btstu.cn/sjtx/api.php?lx=c1&format=json&method=mobile').then((res)=>{
                this.imgurl = res.data.imgurl
                 })

            }

    },
}
</script>

<style lang="scss" scoped>
.context{
    width: 100%;
    background-color: pink;
    text-align: center;
    margin-top: 10px;
    padding-top: 5%;
    .card{
        width: 250px;
        box-shadow: 5px 5px 5px #888888;
        height: 250px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        opacity: 0;
    }
    img{
        width: 250px;
        height: 250px;
        border-radius: 50%;
    }
    .text{
        width: 200px;
        height: 50px;
        margin: auto;
        margin-top: 20%;
        line-height: 50px;
        opacity: 0;
        box-shadow:5px 5px 5px #888888;
    }
}
</style>