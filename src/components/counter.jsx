import React, { Component } from 'react';

class Counter extends Component {

    //all the properties that the counter needs... 
    state = {
        count: 0,

        // imageUrl: 'https://picsum.photos/200'
    };

    formatCount() {
        const { count } = this.state; //using destructing when there's repeatition.. 
        return count === 0 ? 'zero' : count
    }

    styles = {
        //css properties in camelCase notations... 
        fontSize: 13,
        fontWeight: 'bold',
        width: 50
    };

    getBadgeClasses() {
        let spclass = "badge m-2 p-2 ";
        spclass += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return spclass;
    }

    render() {

        return (
            <div>
                {/*  <img src={this.state.imageUrl} alt="" />   <span style={{fontSize:30}}> Hello</span>   //for inline styles...   */}

                <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button className="btn btn-secondary btn-sm">Increment</button>

            </div>
        )
    }

}

export default Counter;