import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragStart(e) {
    console.log('drag works');
  }

  render() {
    return (
      <div className='item'
            draggable
            onDragStart={(e) => this.onDragStart(e)}>
        {this.props.task}
      </div>
    )
  }
}


module.exports = Task;


