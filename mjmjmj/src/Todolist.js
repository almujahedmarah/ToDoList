import React from "react";
// import Todoform from "./Todoform";

// export default class Todolist extends React.Component{
//     state= {
//         todos:[],
//         num:[],
//     };

//     addTodo = (todo) =>{
//         //const newTodo= [...this.state.todos]; 
//         // [...] means Since the array data structure is widely used, 
//         //it will be considered in all the subsequent examples. 
//         //let array1 = ['h', 'e', 'l', 'l', 'o'];
//         //let array2 = [...array1];
//         //console.log(array2);
//         //['h', 'e', 'l', 'l', 'o'] // output  تساوسهم ببعض
//         this.setState({
//             todos: [todo, ...this.state.todos]

//         })
//     };
//      pls = (num) => {
//         this.setState({num :this.state.num+1})
//         // num: [num, ...this.state.num]
//     };
//     min = () => {
//         this.setState({num :this.state.num-1})
//     };
//     delet=(e)=>{
        
//     //     let index= e.target.parantElement;
//     //     index.remove();
//     //     console.log(e)
//     //  e.remove()
//     }
//     render(){
//         return(
//             <div>
//                 <Todoform onSubmit={this.addTodo} />
//                 <ul>
//                 {this.state.todos.map((el)=>{
//                     return (
//                     <div>
//                         <li>{el.text}</li>
//                     <button onClick={this.delet}>delet</button>
//                     <button onClick={this.pls}>+</button>
//                     <h6>{this.state.num}</h6>
//                     <button onClick={this.min}>-</button>
//                     </div>
//                 )})}

//                 </ul>
//             </div>
//         )
//     }
// }
class Todolist extends React.Component {

    constructor(props) {
      super(props);
      this.state={todos:[]};
    }

    save() {
      var todos = [...this.state.todos];
      todos.push(this.newText.value);
      this.setState({todos});
    }

    deleteTodo(index){
        console.log(index)
         var todos = [...this.state.todos];
         todos.splice(index, 1)
         this.setState({todos})
    }


    render(){
        return(
            <div className="list">
              <h1> TO-DO List</h1>
              <input type="text" ref={(ip) => {this.newText = ip}}/>
              <button onClick={this.save.bind(this)} className="btn btn-primary glyphicon glyphicon-floppy-saved">Save
              </button>
              <ul>
                {this.state.todos.map(function(todo, index) {
                      return <li key={index} onClick={this.deleteTodo.bind(this, index)}>{todo}<p>x</p></li>

                 }.bind(this))}

              </ul>
            </div>
        )
    }
};

// ReactDOM.render(<Todo/>, document.getElementById('app'))

export default Todolist