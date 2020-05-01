import React, { Components, Component } from 'react'

class Operation extends Component {
    constructor(props) {
        super(props)
        this.state = {};


    }

    render() {
        return (
            <div className="box">
                <h2 className="title has-text-black">Operaciones</h2>
                <h2 className="title has-text-black">{this.props.suma}</h2>

                <button onClick={this.props.sumar} className="button is-success">
                    sumar
                </button>{"    "}

                <h2 className="title has-text-black">{this.props.resta}</h2>
                <button onClick={this.props.restar} className="button is-danger">
                    restar
                </button>
            </div>



        );
    }

}

export default Operation;