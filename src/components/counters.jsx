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



    //to delete... 
    handleDelete = (counterId) => {
        console.log('Event Handler Called...', counterId)
    }


    render() {
        return (
            <div>
                {
                    this.state.counters.map(c =>
                        <Counter key={c.id} value={c.value} selected={true} onDelete={this.handleDelete} id={c.id} />
                        /* { <h4>Counter #{c.id} </h4> }
                     </Counter>*/
                    )
                }

            </div>
        )
    }
}

export default Counters;