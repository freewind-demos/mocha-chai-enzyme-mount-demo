import React from 'react';

export default class Box extends React.Component {
  render() {
    const {name, onDeleteFruit} = this.props;
    return <div>
      <span>Box: {name}</span>
      <button title="delete" onClick={()=> onDeleteFruit(name)}>x</button>
    </div>
  }
}
