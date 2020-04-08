import React from 'react';

import Header from './Header.js';
import List from './List.js';
import Footer from './Footer.js';

import './App.scss';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
      showNewTodo: false,
      newTodo: '',
      newTodoTime: '',
      items: [
        {
          name: 'todo 1',
          isChecked: false,
          time: '13:03',
        },
        {
          name: 'this is a really really really really super long label that may make this super wide',
          isChecked: false,
          time: '02:45',
        },
        {
          name: 'todo 3',
          isChecked: false,
          time: '22:00',
        }
      ]
    }
  }

  handleChange = (event) => {
    this.setState({newTodo: event.target.value});
  }

  handleTimeChange = (event) => {
    this.setState({newTodoTime: event.target.value});
  }

  handleInputChange = (event) => {
    const index = event.target.name;
    const isChecked = event.target.checked;

    const tempState = [...this.state.items];
    tempState[index].isChecked = isChecked;
    
    this.setState({ items: tempState });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {newTodo, newTodoTime} = this.state; 
    if(newTodo && newTodoTime) {
      this.setTodo();
    } else {
      this.showError();
    }
  }

  setTodo = () => {
    this.setState({
      items: [
        ...this.state.items,
        {
          name: this.state.newTodo,
          isChecked: false,
          time: this.state.newTodoTime,
        }
      ],
      newTodo: '',
      newTodoTime: '',
      errorMessage: '',
    })
  }

  showError = () => {
    let errorMessage = '';
    if(!this.newTodo && !this.newTodoTime) {
      errorMessage = 'Please add a todo and the time it will due'
    }
    if(!this.newTodo) {
      errorMessage = 'Please add some todo text';
    }

    errorMessage = 'Please add when this todo is due';

    this.setState({
      errorMessage: errorMessage,
    })
  }

  closeAddTodo = () => {
    this.setState(
      {
        showNewTodo: false,
        newTodo: '',
        newTodoTime: '',
        errorMessage: '',
      }
    )
  }

  openAddTodo = () => {
    this.setState({showNewTodo: true})
  }

  render() {
    return (
      <div className="App">
        <div className="todo-list-container">
          <Header numberOfTasks={this.state.items.length} />
          <button onClick={this.openAddTodo} className="todo-list-floating-button">
            <span className="font--large">+</span>
          </button>
          <List items={this.state.items} handleInputChange={this.handleInputChange} />
          <Footer
            newTodo={this.state.newTodo}
            newTodoTime={this.state.newTodoTime}
            showNewTodo={this.state.showNewTodo}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleTimeChange={this.handleTimeChange}
            closeAddTodo={this.closeAddTodo}
            errorMessage={this.state.errorMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
