import React from 'react';
import { link, Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form action="" className="box">
                                    <div className="field">
                                        <label for="" className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input type="password" placeholder="*******" className="input" required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="checkbox">
                                            <input type="checkbox" />
                                                Remember me
                                        </label>
                                    </div>
                                    <div className="field">
                                        <Link to="/Main">
                                            <button className="button is-success" >
                                                Login
                                        </button>
                                        </Link>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )

    }


}

export default Login;