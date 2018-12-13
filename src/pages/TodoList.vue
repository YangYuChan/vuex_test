<template>
  <div class="list">
    <div class="userInfo">欢迎您{{mobile}}</div>
    <AddTodo></AddTodo>
    <List></List>
  </div>

</template>

<script>
  import AddTodo from '../components/AddTodo'
  import List from '../components/List'
    export default {
        name: "TodoList",
        computed:{
          mobile(){
            return this.$store.state.login.mobile;
          }
        },
        components:{
          AddTodo,
          List
        }
    }
</script>

<style scoped>
.userInfo{
  margin: 50px auto;
  text-align:center ;
}
</style>
