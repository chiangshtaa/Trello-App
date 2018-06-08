import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragStart(e, task) {
    console.log('drag works', task);
    e.dataTransfer.setData('taskName', task);
    
  }

  render() {
    return (
      <div className='item'
            draggable
            onDragStart={(e) => this.onDragStart(e, this.props.task)}>
        {this.props.task}
      </div>
    )
  }
}


module.exports = Task;


