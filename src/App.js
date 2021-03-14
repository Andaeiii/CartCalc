
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




  render() {

    return (
      <>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
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
