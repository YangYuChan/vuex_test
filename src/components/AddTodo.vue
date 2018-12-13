<template>
    <div class="add-todo">
      <div class="form-group">
        <input type="text" class="form-contorl" v-model="todoText">
        <button class="login-btn" @click="addTodo">添加</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data(){
            return{
              todoText:''
            }
        },
        methods:{
          addTodo(){
            this.$store.dispatch('addTodo',this.todoText);
            this.todoText = '';
          }
        }
    }
</script>

<style scoped>
  .add-todo{
    width: 300px;
    margin: 0 auto;
  }
  .form-group{
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-contorl{
    width: 220px;
  }
  .form-contorl,
  .login-btn{
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    outline: none;
  }
  .login-btn{
    background-color: #eee;
    width: 70px;
    font-size: 16px;
  }
  .login-btn:active{
    background-color: #cfcfcf;
  }
</style>
