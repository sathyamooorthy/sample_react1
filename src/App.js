import React from 'react';
import Form from './Form';
import axios from 'axios'
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading:false
    };
  }
  componentDidMount = () =>{
    this.setState({
      loading:true

    })
   
    axios.get("http://localhost:3000/posts").then(
      response => {
        this.setState({
          items: response.data,
          loading:false
        });
      })
        .catch(error => {
        this.setState({
          error
        })
        
      
})}

  addTodo = (item,element) => { 
    let flag = false;  
   for(let i=0;i<this.state.items.length;i++){
    if(item===this.state.items[i].title){
      flag =true;
      break;
    }
    
   }
   if(flag===false){
     const id = this.state.items.length + 1;
     const record = {
       id,
       title: item
     };
     this.setState({
       items: [...this.state.items, record]  //creating copy of the items array using spread property and appending new object.
     });
     element.value = ""
   }else{
     alert()
   }
   
  }

  render() {
    if(this.state.loading){
      return <p>loading... please wait</p>;
    }
    return (
      <div className="container">
        <h2 className="text-center"> To Do List</h2>
        <Form addTodo={this.addTodo} />
        <TodoList items={this.state.items} />
      </div>
    );
  
  }
  }


export default App;
