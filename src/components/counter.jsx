import React, { Component } from 'react';

class Counter extends Component {



    formatCount = () => {
        const count = this.props.counter.value; // this.state;
        return count === 0 ? 'zero' : count;
    }



    styles = {
        fontSize: 13,
        fontWeight: 'bold',
        width: 50
    };

    getBadgeClasses() {
        let spclass = "badge m-2 p-2 ";
        spclass += (this.props.counter.count === 0) ? "badge-warning" : "badge-primary";
        return spclass;
    }


    render() {


        console.log(this.props);

        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2"> Del </button>
            </div>
        )
    }

}

export default Counter;