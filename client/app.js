import React from 'react';
import List from './list.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { name: 'To-Do',
          tasks: ['Task 1']
        },
        { name: 'In Progress',
          tasks: ['Task 2']
        },
        { name: 'Complete', 
          tasks: ['Task 5', 'Task 6', 'Task 7']
        }
      ],
      newList: ''
    }
  }

  handleNewList(event) {
    this.setState({
      newList: event.target.value
    })
  }

  addList(event) {
    console.log('it works');
    for (let i = 0; i < this.state.lists.length; i++) {
      if (this.state.lists[i].name === this.state.newList) {
        alert('List name has already been used.  Try another name');
        this.setState({
          newList: ''
        })
        return;
      }
    }
    if (event.key === 'Enter') {
      this.state.lists.push({
        name: this.state.newList,
        tasks: []
      })
      this.setState({
        newList: ''
      })
    }
  }

  // handleTaskMoveForward(task, list) {
  //   console.log('Forward goes all the way back to root App', task, list);
  //   for (let i = 0; i < this.state.lists.length; i++) {
  //     if (this.state.lists[i].name === list) {
  //       let index = this.state.lists[i].tasks.indexOf(task);
  //       if (i !== this.state.lists.length - 1) {
  //         let moved = this.state.lists[i].tasks.splice(index, 1);
  //         this.state.lists[i + 1].tasks.push(moved);
  //         break;
  //       } else {
  //         alert('Task already at the end of the line!');
  //       }
  //     }
  //   }
  //   this.setState(this.state);
  // }

  // handleTaskMoveBackward(task, list) {
  //   console.log('Back goes all the way back to root App', task, list);
  //   for (let i = 0; i < this.state.lists.length; i++) {
  //     if (this.state.lists[i].name === list) {
  //       let index = this.state.lists[i].tasks.indexOf(task);
  //       if (i !== 0) {
  //         let moved = this.state.lists[i].tasks.splice(index, 1);
  //         this.state.lists[i - 1].tasks.push(moved);
  //         break;
  //       } else {
  //         alert('Task needs to be done!');
  //       }
  //     }
  //   }
  //   this.setState(this.state);
  // }

  // handleListMoveForward(list) {
  //   console.log('here forward', list);
  //   for (let i = 0; i < this.state.lists.length; i++) {
  //     if (this.state.lists[i].name === list && i !== this.state.lists.length - 1) {
  //       let temp = this.state.lists[i + 1];
  //       this.state.lists[i + 1] = this.state.lists[i];
  //       this.state.lists[i] = temp;
  //       break;
  //     }
  //   }
  //   this.setState(this.state);
  // }

  // handleListMoveBackward(list) {
  //   console.log('backward', list);
  //   for (let i = 0; i < this.state.lists.length; i++) {
  //     if (this.state.lists[i].name === list && i !== 0) {
  //       let temp = this.state.lists[i - 1];
  //       this.state.lists[i - 1] = this.state.lists[i];
  //       this.state.lists[i] = temp;
  //       break;
  //     }
  //   }
  //   this.setState(this.state);
  // }

  updateTasks(taskName, list) {
    console.log('update task', taskName);
    let lists = this.state.lists.slice();
    for (let i = 0; i < lists.length; i++) {
      for (let j = 0; j < lists[i].tasks.length; j++) {
        if (lists[i].tasks[j] === taskName) {
          lists[i].tasks.splice(j, 1);
        }
      }
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === list) {
        lists[i].tasks.push(taskName);
      }
    }
    this.setState({           
      lists: lists   
    });
  }

  render() {
    return (
      <div className='main'>
      {this.state.lists.map((list, index) => {
        return (
          <List
            name={list.name} 
            tasks={list.tasks} 
            key={index} 
            updateTasks={(taskName, list) => this.updateTasks(taskName, list)}
            // handleTaskMoveForward={(task, list) => this.handleTaskMoveForward(task, list)}
            // handleTaskMoveBackward={(task, list) => this.handleTaskMoveBackward(task, list)}
            // handleListMoveForward={(list) => this.handleListMoveForward(list)}
            // handleListMoveBackward={(list) => this.handleListMoveBackward(list)}
          />
        )
      })}
      <input
        id='addList' 
        placeholder='Add a list...' 
        value={this.state.newList} 
        onChange={(event) => this.handleNewList(event)}
        onKeyPress={(event) => this.addList(event)}/>
      </div>
    )
  }
}

module.exports = App;

