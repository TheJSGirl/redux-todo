import {createStore}  from 'redux';
//step3 define reducers
const reducer = (state = 0, action) => {
  let newTodos = [];

  switch(action.type){
    case "ADD_TODO":
      newTodos = [...state, ...action.payload];
      state = newTodos;
    break;

    case "DELETE_TODO":
      newTodos = state.filter((todo) => todo.title!== action.payload);
      state = newTodos;
    break;

    case "TOGGLE_STATUS":
      newTodos = [...state];
      newTodos.forEach((todo) => {
        if(todo.title === action.payload){
          todo.status = !todo.status;
        }
      });
      state = newTodos;
      break;
  }

  return state;
}

//step 1 create store
const todoStore = createStore(reducer);


//to see the current state 
todoStore.subscribe(() => {
  console.log('current state is :', todoStore.getState());
})

// step 2 create nd dispatch functions
todoStore.dispatch({type: "ADD_TODO" ,
payload:[{
  title: 'Study',
  addedOn: new Date().toDateString(),
  status: false
},
{
  title: 'Music',
  addedOn: new Date().toDateString(),
  status: false
},
{
  title: 'Coding',
  addedOn: new Date().toDateString(),
  status: false
}]
});

todoStore.dispatch({type: "DELETE_TODO",
payload:"Music"});

todoStore.dispatch({type: "TOGGLE_STATUS", payload:'Coding'})
