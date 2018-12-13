const ADD_TODO = 'ADD_TODO'
const DONE_TODO = 'DONE_TODO'
const SELECT_TYPE = 'SELECT_TYPE'
export default {
  state:{
    todoList:[],
    todoInfo:{
      id:0,
      text:'',
      isDone:false
    },
    selected:0
  },
  actions:{
    addTodo({commit},todoText){
      commit(ADD_TODO,todoText);
    },
    doneTodo({commit},id){
      commit(DONE_TODO,id)
    },
    selectType({commit},type){
      commit(SELECT_TYPE,type)
    }
  },
  mutations:{
    [ADD_TODO](state,todoText){
      if(todoText){
        let todoInfo = {};
        todoInfo.isDone = false;
        if(state.todoList.length == 0){
          todoInfo.id = 0
        } else if(state.todoList.length > 0){
          let todoFirst = state.todoList[state.todoList.length -1];

          todoInfo.id = todoFirst.id + 1;
        }
        todoInfo.text = todoText;
        state.todoList.push(todoInfo);
      }
    },
    [DONE_TODO](state,id){
      state.todoList.map((item) =>{
        if(item.id == id){
          item.isDone = true;
        }
      })
    },
    [SELECT_TYPE](state,type){
      state.selected = type;
    }
  },
  getters:{
    filterDoned(state){
      let todoList = state.todoList.filter((item) => {
        if(item.isDone){
          return item
        }
      })
      return todoList
    },
    filterNoDoned(state){
      let todoList = state.todoList.filter((item) =>{
        if(!item.isDone){
          return item;
        }
      })
      return todoList
    }
  },
}
