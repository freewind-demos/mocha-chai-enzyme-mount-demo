import React from 'react';
import Box from './box.jsx';

class Hello extends React.Component {
  render() {
    const {fruit, onDeleteFruit} = this.props;
    return <div>
      <h1>Hello, I like:</h1>
      {
        fruit.map((name, index) => <Box key={index} name={name} onDeleteFruit={onDeleteFruit}/>)
      }
    </div>
  }
}

export default Hello;
