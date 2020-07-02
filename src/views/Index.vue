<template>
<div id="app">
    <Header @user="usershow" @id="userid" />
    <Context/>
    <Footer/>
    <div class="user" ref="user">
        <h3>欢迎用户：{{ username }}</h3>
        <h4 v-show="isuser" @click="clearuser">退出</h4>
    </div>
    <div class="close" @click="usernone" ref="close"></div>
    </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Context from '@/components/Context/Context'
export default {
    components:{
        Header,
        Context,
        Footer
    },
    data(){
        return{
            user:false,
            id:'bz',
            username:localStorage.getItem('username'),
            isuser:false
        }
    },
    methods:{
        usershow(data){
            this.user = data
            if(this.user){
                this.$refs.user.style.left = 0
                this.$refs.user.style.transition = '1s all '
                this.$refs.close.style.zIndex = 99
            }
        },
        usernone(){
            this.user = !this.user
             if(!this.user){
                this.$refs.user.style.left = "-100%"
                this.$refs.close.style.zIndex = -1
                this.$refs.user.style.transition = '1s all '
            }
        },
        userid(data){
            console.log(data)
        },
        clearuser(){
            localStorage.setItem("username",'')
            localStorage.setItem("password",'')
             this.$router.go(0)
        }
    },
    mounted(){
        if(localStorage.getItem('username') && localStorage.getItem('password')){
            this.isuser = true;
        }else{
            this.isuser = false;
        }
    }
}
</script>

<style scoped>
.user{
    width: 60%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    right: 0;
    z-index: 99;
}
.close{
    width: 40%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    z-index: -1;
}
</style>