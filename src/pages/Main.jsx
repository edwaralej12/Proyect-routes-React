import React, { Component } from 'react';
import {link,Link} from 'react-router-dom';
import Counter from '../components/Counter';
import Operation from '../components/Operation';


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numero: 5,
            numeroSuma: 5,
            numeroResta: 10,
            resultado: 0
        }

    }

    _handleIncrementar = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    _handleDisminuir = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    _handleSuma = () => {
        this.setState({
            resultado: this.state.numero + this.state.numeroSuma
        })
    }

    _handleResta = () => {
        this.setState({
            resultado: this.state.numero - this.state.numeroResta
        })
    }



    render() {
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <div className="field">
                                    <h1>El Resultado es : {this.state.resultado} </h1>

                                    <Counter 
                                    contador={this.state.numero}
                                    incrementar={this._handleIncrementar} 
                                    decrementar={this._handleDisminuir} 
                                    />

                                    <Operation
                                    suma={this.state.numeroSuma}
                                    resta={this.state.numeroResta}
                                    sumar={this._handleSuma}
                                    restar={this._handleResta}
                                    />


                                    <button className="button is-success" >ir a detalles</button> {"   "}

                                    <Link to="/ ">
                                        <button className="button is-danger" >cerrar Sesion </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        )

    }

}


export default Main;
