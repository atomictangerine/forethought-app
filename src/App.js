import React from 'react';
import Moment from 'react-moment';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showAddTodoButton: true,
      newTodo: '',
      newTodoTime: '',
      items: [
        {
          name: 'todo 1      ',
          isChecked: false,
          time: '13:03',
        },
        {
          name: 'todo 2      ',
          isChecked: false,
          time: '02:45',
        },
        {
          name: 'todo 3    ',
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

  handleSubmit = (event) => {
    event.preventDefault();
    const {newTodo, newTodoTime} = this.state; 
    if(newTodo && newTodoTime) {
      this.setTodo();
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
    })
  }

  closeAddTodo = () => {
    this.setState({showAddTodoButton: true})
  }

  openAddTodo = () => {
    this.setState({showAddTodoButton: false})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <div>
              <Moment format="D">{Date.now()}</Moment>
            </div>
            <div>{this.state.items.length} Tasks</div>
          </div>
          <div>
            {this.state.items.map((item) => {
              return (
                <div key={item.name}>
                  <input type="checkbox" name={item.name} value={item.isChecked} />
                  <label>{item.name}</label>
                  {item.time}
                </div>)
            })}
            <div></div>
          </div>
          <button onClick={this.openAddTodo} hidden={!this.state.showAddTodoButton}>Add New Todo</button>
          <div hidden={this.state.showAddTodoButton}>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="new-todo" value={this.state.newTodo} onChange={this.handleChange} required />
              <input type="time" name="new-todo-time" value={this.state.newTodoTime} onChange={this.handleTimeChange} required/>
              <button onClick={this.handleSubmit}>onSubmit</button>
              <button onClick={this.closeAddTodo} >Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
