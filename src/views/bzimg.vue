<template>
  <div class="imgbox" ref="imgbox" >
      <img :src="img" ref="img">
      <div class="exit" @click='exit'></div>
    <div class="gengxin" @click='gengxin' ref="gengxin"></div>
    <div class="bc" @click="bc" ref="bc">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            width:document.documentElement.clientWidth+'px',
            height:document.documentElement.clientHeight+'px',
            img:'',
            maxclick:0,
            num:10
        }
    },
    mounted(){
        axios.get('http://api.btstu.cn/sjbz/api.php?lx=dongman&format=json&method=mobile').then((res)=>{
            this.img = res.data.imgurl;
            // this.$refs.img.style.backgroundImage = "url("+this.img+")"+" "+"no-repeat;";
        //     this.$refs.img.style.width = this.width;
        // this.$refs.img.style.height = this.height;
        // this.$refs.img.style.background = "url('+res.data.imgurl+')"
        })
        // console.log(this.width,this.height)
        this.$refs.imgbox.style.width = this.width;
        this.$refs.imgbox.style.height = this.height;
        this.$refs.imgbox.style.background = "url('+this.img+')"
        this.imgshow()
    },
    methods:{
        imgshow(){
            setTimeout(() => {
                this.$refs.img.style.opacity = 1
            }, 1000);
        },
        exit(){
            this.$router.push({path:'/Index'})
        },
        gengxin(){
            Indicator.open({
                text:'正在更新中',
                spinnerType: 'fading-circle'
            });
            if(this.maxclick<=4){
            axios.get('http://api.btstu.cn/sjbz/api.php?lx=dongman&format=json&method=mobile').then((res)=>{
            this.img = res.data.imgurl;
            this.maxclick++;
            Indicator.close();
        })
            }else{
                Indicator.open({
                text:'太快啦~休息一下',
            });
            this.$refs.gengxin.style.display = "none"
            setInterval(()=>{
                Indicator.close();
                this.maxclick = 0
                this.$refs.gengxin.style.display = "block"
            },5000)
            }
        },
        bc(){
            Toast({
            message: '下载功能正在完善~~',
            iconClass: 'icon icon-error'
            });
        }
        }
    
}
</script>
s
<style scoped>
*{margin: 0;padding: 0;}
img{
    width: 100%;
    height: 100%;
    opacity: 0;
    /* background:url('../assets/admin.jpg') no-repeat 4px 5px */
}
.exit{
    height: 80%;
    width:25%;
    background-color: white;
    opacity: 0;
    z-index: 1;
    position: absolute;
    top: 0;
}
.gengxin{
    height: 80%;
    width:25%;
    background-color: white;
    opacity: 0;
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
}
.bc{
    height: 10%;
    width:100%;
    background-color: white;
    opacity: 0;
    z-index: 1;
    position: absolute;
    top: 90%;

}
</style>