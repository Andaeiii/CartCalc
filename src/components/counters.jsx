import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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

    //when an object is declared like this ---  ({counter}) = ({counter: counter}) //key and variable name are the same... 


    /*
 
         map(counter => 
             <Counter
                 key={counter.id}
                 selectedId={true}
                 onDelete={this.handleDelete}
                 id={counter.id}
                 value={counter.value}
               />
           )
 
    */

    render() {
        return (
            <div>

                <button
                    className="btn.btn-primary btn-sm m-3 p-8"
                    onClick={this.handleReset}>
                    reset
                </button>


                {
                    this.state.counters.map(c =>

                        <Counter
                            key={c.id}
                            selected={true}
                            onIncrement={this.handleIncrement}
                            onDelete={this.handleDelete}
                            id={c.id}
                            value={c.value}
                            counter={c}

                        />



                        /* { <h4>Counter #{c.id} </h4> }
                    </Counter>*/
                    )
                }

            </div>
        )
    }
}

export default Counters;