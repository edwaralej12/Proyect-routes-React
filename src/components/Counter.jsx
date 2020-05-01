import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {};


    }
    render() {

        return (

            <div className="box">
                <h2 className="title has-text-black">Contador</h2>
                <h2 className="title has-text-black"> {this.props.contador} </h2>

                <button onClick={this.props.incrementar} className="button is-success">
                    incrementar
                    </button>{"    "}

                <button onClick={this.props.decrementar} className="button is-danger">
                    disminuir
                    </button>
            </div>




        );
    }

}


export default Counter;