import React, { Component } from 'react';
// import Todos from './components/Todos'
// import AddTodo from './AddTodo'

import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Play soccer'
      },
      {
        id: 2,
        content: 'Drink red bull'
      }
    ]
  }

  deleteTodo = (id) => {
    console.log(id)
    const todos = this.state.todos.filter(item => {
      return item.id !== id
    })

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
	todo.id = Math.random()
	let newTodos = [...this.state.todos, todo]
	this.setState({
		todos: newTodos
	})
  }
  
  render() {
    return (
		<BrowserRouter>
			<div className="App">
				{/* <h1 className="center blue-text">Todo's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
				<AddTodo addTodo={this.addTodo}/> */}
				<NavBar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/about" component={About}/>
					<Route path="/:post_id" component={Post}></Route>
          {/* <Route path="/todo" component={Todos}></Route> */}
				</Switch>
			</div>
	  	</BrowserRouter>
    );
  }
}

export default App;
