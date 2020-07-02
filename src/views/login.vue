<template>
  <div class="login">
      用户名：<input v-model="username" type="text" name="username"></br>
      密码：<input  v-model="password" type="password" name="password">
      <button @click="submit">登录</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
          username:'',  
          password:''
        }
    },
    methods:{
        submit(){
            localStorage.setItem("username",this.username)
            localStorage.setItem("password",this.password)
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                this.$router.push({path:'/Index'})
                this.$router.go(0)
            }else{
                alert('登录失败')
            }
        }
    }
}
</script>

<style scoped>
.login{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    background: rgba(red, green, blue, .5);
}
</style>