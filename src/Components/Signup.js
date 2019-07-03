import React from "react";

class AskNameForSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="first_name">First Name:</label>
                        <input type="text" id="first_name" value={this.state.username} onChange={this.handleChange}/>
                        <label htmlFor="last_name">Last Name:</label>
                        <input type="text" id="last_name" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <div className="left-button">
                            <button onClick="">SignUp</button>
                        </div>
                        <div className="right-button">
                            <button type="submit">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.username);
        this.props.changeUser(this.state.username);
        event.preventDefault();
    }
}

class AskPasswordForLogin extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="field">
                    <div className="profile-pic centered">
                        <i className="fas fa-user"> </i>
                    </div>
                    <div className="username">
                        {this.props.username}
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"/>
                </div>
                <div className="field">
                    <div className="left-button">
                        <button onClick={this.props.resetUser}>Cancel</button>
                    </div>
                    <div className="right-button">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export {AskNameForSignup, AskPasswordForLogin};