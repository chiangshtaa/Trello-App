import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'item'
    }
  }

  onDragStart(e, task) {
    console.log('drag works', task);
    e.dataTransfer.setData('taskName', task);
    let className = this.state.className;
    className += ' hold';
    this.setState({
      className: className
    })
  }

  onDragEnd() {
    this.setState({
      className: 'item'
    })
  }

  render() {
    return (
      <div className={this.state.className}
            draggable
            onDragStart={(e) => this.onDragStart(e, this.props.task)}
            onDragEnd={() => this.onDragEnd()}>
        {this.props.task}
      </div>
    )
  }
}


module.exports = Task;


