<template>
    <div class="head">
        <ul class="ul">
            <li><img class="tximg" src="@/assets/admin.jpg"  @click="show(true)"></li>
            <li ref="li" @click="id('bz')">手机壁纸</li>
            <li ref="li1" @click="id('tx')">热门头像</li>
        </ul>
        <hr>
    </div>

</template>

<script>
export default {
    data(){
        return{
         id2:'bz'
            }
        },
    methods:{
        show(res){
            if (!localStorage.getItem('username') && !localStorage.getItem('password')) {
                this.$router.push({path:'/login'})
            }else{
                this.$emit('user',res)
            }    
        },
        id(res){
            this.$emit('id',res)
        }
        },
    }
</script>

<style lang="scss" scoped>
.ul{
    list-style: none;
    clear: both;
    height: 50px;
    background-color: white;
    line-height: 50px;
    text-align: center;

    li{
        float: left;
        width: 30%;
        
    }
    li:hover{
        float: left;
        width: 30%;
        transition: 1s all;
        font-size: 15px;
        color: red;
    }
    .tximg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .tximg:hover{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        transition: 1s all;
    }
}
</style>