import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  //state is managed inside a component and only called on classes that extends Component. It's not a function component
  state = {
    persons: [
      {name: 'BMO', age: 28},
      {name: 'Max', age: 28},
      {name: 'Viking', age: 9}
    ]
  }

  switchNameHandler = (newName) => {
    //DON'T DO THIS: this.state.persons[0].name = 'Barbara'; 
    //this will merge with existing data
    this.setState({persons: [
      {name: 'Barbara', age: 28},
      {name: newName, age: 28},
      {name: 'Viking, the Golden Rascal', age: 9}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: event.target.value, age: 28},
      {name: 'Max', age: 28},
      {name: 'Viking, the Golden Rascal', age: 9}
    ]})
  }

  render() {
    //inline styles
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      //este é igual ao return HTML exclusivo de baixo, mas formatado diferente
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, 'Max!')}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}
          />
      </div>
    );
    
  }
}

export default App;
