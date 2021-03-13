import React, { Component } from 'react';

class Counter extends Component {

    //all the properties that the counter needs... 
    state = {
        count: this.props.value,
        tags: []      // imageUrl: 'https://picsum.photos/200'     // 'tag1', 'tag2', 'tag3'     
    };

    formatCount() {
        const { count } = this.state; //using destructing when there's repeatition.. 
        return count === 0 ? 'zero' : count
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags </p>

        return <ul>  {this.state.tags.map((tag, id) => <li key={id}> {tag} </li>)} </ul>
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


    //props - data given from outside..   react does not allow you change any input of a compoenent..
    //state - internal data.. 

    handleIncrement = (product) => {

        this.setState({ count: this.state.count + product.id });
    }

    //  true && "Hi" //outpus Hi.  //trutsy. used for (condition) && variable{string/number} // 0 = false, 1,2,3 = true.
    //  false && "Hi" //outputs false. 
    //  true && 'Hi' && 1



    render() {

        //console.log('props', this.props); //the properties..  value and selected...
        console.log(this.props);

        return (
            <div>
                {/*  <img src={this.state.imageUrl} alt="" />   <span style={{fontSize:30}}> Hello</span>   //for inline styles...   */}

                {/* {this.props.children} */}

                <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>

                <button onClick={() => this.handleIncrement({ id: 3 })} className="btn btn-secondary btn-sm">Increment</button>

                <button onClick={() => this.props.onDelete(this.props.id)} class="btn btn-danger btn-sm m-2"> Del </button>

                {/* 
                    onDelete propagates outwards to the external container... 
                */}


                {/* 
                
                {this.state.tags.length === 0 && " Please create a new tag... "}  using the logical && operator.. used between non boolean values..  

                {this.renderTags()}
                
                */}



            </div>
        )
    }

}

export default Counter;