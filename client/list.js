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

  onDragOver(e) {
    e.preventDefault();
    console.log('dragOver works');
  }

  render() {
    return (
      <div className='list-group'
            onDragOver={(e) => this.onDragOver(e)}>
        <div className='header'>
          {this.props.name}
        </div>
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
    )
  }
}

module.exports = List;




