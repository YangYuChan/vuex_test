<template>
    <div class="todo-list">
      <ul>
        <li class="todo-item" v-for="item in todoList" @click="doneTodo(item.id)">
          <input type="checkbox">

          <span :class="{'isDone':item.isDone}">{{item.id}}、{{item.text}}</span>
        </li>
      </ul>
      <div class="select-section">
        <span :class="{'select-type':selected == '0','select':'true'}" @click="selectType('0')">全部</span>
        <span :class="{'select-type':selected == '1','select':'true'}" @click="selectType('1')">已完成</span>
        <span :class="{'select-type':selected == '2','select':'true'}" @click="selectType('2')">未完成</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        computed:{
          todoList(){
            let selected = this.$store.state.todo.selected
            if(selected == '0'){
              return this.$store.state.todo.todoList
            } else if(selected == '1'){
              return this.$store.getters.filterDoned
            } else if(selected == '2'){
              return this.$store.getters.filterNoDoned
            }
          },
          selected(){
            return this.$store.state.todo.selected
          }
        },

      data(){
          return{

          }
      },
         methods:{
          doneTodo(id){
            this.$store.dispatch('doneTodo',id);
          },
          selectType(type){
            if(type){
              this.$store.dispatch('selectType',type)
            }
          },
      }
    }
</script>

<style scoped>
.todo-item{
  width: 300px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  padding: 5px;
}
  ul,li{
    list-style: none;
  }
.isDone{
  text-decoration: line-through;
}

.select-type{
  background-color: #42b983;
  color:white
}
.select{
  display: inline-block;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
}
  .select-section {
    text-align: center;
  }
</style>
