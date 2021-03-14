import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {



    render() {
        return (
            <div>

                <button
                    className="btn.btn-primary btn-sm m-3 p-8"
                    onClick={this.props.onReset}>
                    reset
                </button>


                {
                    this.props.counters.map(c =>

                        <Counter
                            key={c.id}
                            selected={true}

                            onIncrement={this.props.onIncrement}
                            onDelete={this.props.onDelete}

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