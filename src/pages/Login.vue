<template>
  <div class="wrapper">
    <div class="login">
      <h1 class="title">登录</h1>
      <div class="form-group">
        <input type="text" class="form-contorl" v-model="mobile">
      </div>
      <div class="form-group">
        <input type="text" class="form-contorl" v-model="password">
      </div>
      <div class="form-group">
        <button class="login-btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Login",
      computed:{

      },
      data(){
        return{
          mobile:'18516539654',
          password:'123456'
        }
      },
      methods:{
        login(){
          this.$store.dispatch('addMyInfo',{'mobile':this.mobile,'password':this.password});
          // this.$store.dispatch('showLogin',false);
          this.$router.push('/TodoList');
        },
      }
    }
</script>

<style scoped>
  .title{
    text-align: center;
    margin-bottom: 50px;
  }
  .wrapper{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login{
    width: 300px;
    height: auto;
  }
  .form-group{
    margin: 20px 0;
  }
  .form-contorl,
  .login-btn{
    width: 100%;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    outline: none;
  }
  .login-btn{
    background-color: #eee;
    font-size: 16px;
  }
  .login-btn:active{
    background-color: #cfcfcf;
  }
</style>
