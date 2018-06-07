import React from 'react';
import Task from './task.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: ''
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

  handleTaskMoveForward(task, list) {
    this.props.handleTaskMoveForward(task, list);
  }

  handleTaskMoveBackward(task, list) {
    this.props.handleTaskMoveBackward(task, list);
  }

  handleListMoveForward(list) {
    this.props.handleListMoveForward(list);
  }

  handleListMoveBackward(list) {
    this.props.handleListMoveBackward(list);
  }

  render() {
    return (
      <div className='list-group'>
        <div className='header'>{this.props.name}
          <button
            id='forwardButton'
            onClick={(list) => this.handleListMoveForward(this.props.name)}
          />
          <button
            id='backwardButton'
            onClick={(list) => this.handleListMoveBackward(this.props.name)}
          />
        </div>
        {this.props.tasks.map((task, index) => {
          return (
            <Task 
              task={task} 
              key={index} 
              handleTaskMoveForward={(task, list) => this.handleTaskMoveForward(task, this.props.name)}
              handleTaskMoveBackward={(task, list) => this.handleTaskMoveBackward(task, this.props.name)}
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
    )
  }
}

module.exports = List;




