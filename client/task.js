import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTaskMoveForward(task) {
    this.props.handleTaskMoveForward(task);
  }

  handleTaskMoveBackward(task) {
    this.props.handleTaskMoveBackward(task);
  }


  render() {
    return (
      <div className='item'>
        {this.props.task}
        <button 
          id='forwardButton' 
          onClick={(task) => this.handleTaskMoveForward(this.props.task)}
        />
        <button 
          id='backwardButton' 
          onClick={(task) => this.handleTaskMoveBackward(this.props.task)}
        />
      </div>
    )
  }
}


module.exports = Task;


