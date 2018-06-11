import React from 'react';
import Task from './task.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: '',
      className: ''
    }
  }

  handleNewCard(event) {
    this.setState({
      newCard: event.target.value
    })
  }

  addCard(event) {
    if (event.key === 'Enter') {
      this.props.tasks.push(this.state.newCard);
      this.setState({
        newCard: ''
      })
    }
  }

  onDragOver(e) {
    e.preventDefault();
    // console.log('dragOver works');
    let className = this.state.className;
    className += ' hovered';
    this.setState({
      className: className
    })
  }

  onDrop(e, list) {
    console.log('drop works', list);
    let taskName = e.dataTransfer.getData('taskName');
    this.props.updateTasks(taskName, list);
    this.setState({
      className: ''
    })
  }

  onDragLeave(e) {
    this.setState({
      className: ''
    })
  }

  render() {
    return (
      <div className='list-group'>
        <div className='header'>
          {this.props.name}
        </div>
        <div className={this.state.className}
            onDragLeave={() => this.onDragLeave()}
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, this.props.name)}>
          {this.props.tasks.map((task, index) => {
            return (
              <Task
                task={task} 
                key={index} 
              />
            )
          })}
          <input
            id='addCard'
            placeholder='Add a Card...'
            value={this.state.newCard}
            onChange={(event) => this.handleNewCard(event)}
            onKeyPress={(event) => this.addCard(event)}/>
        </div>
      </div>
    )
  }
}

module.exports = List;




