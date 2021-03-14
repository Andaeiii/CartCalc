
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar'

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }


  handleIncrement = (counter) => {
    //clone the array..
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);    //get the position of that counter... 
    counters[index] = { ...counter }; //copy the counter from the parameter sent... 
    counters[index].value++;
    this.setState({ counters })
  }


  //to delete... 
  handleDelete = (counterId) => {
    //console.log('Event Handler Called...', counterId)

    const remainderCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: remainderCounters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  }

  render() {

    return (
      <>
        <NavBar />
        <main className="container">

          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />

        </main>

      </>
    );
  }

}

export default App;
