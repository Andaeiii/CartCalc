import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    render() {

        //inside the render function.... 
        const { onReset, counters, onIncrement, onDelete } = this.props;

        return (
            <div>

                <button
                    className="btn.btn-primary btn-sm m-3 p-8"
                    onClick={onReset}>
                    reset
                </button>


                {
                    counters.map(c =>

                        <Counter
                            key={c.id}
                            selected={true}

                            onIncrement={onIncrement}
                            onDelete={onDelete}

                            id={c.id}
                            value={c.value}
                            counter={c}

                        />

                    )
                }

            </div>
        )
    }
}

export default Counters;