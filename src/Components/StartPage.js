import React from 'react';
import '../Assets/css/login.css';
import '../Assets/fontawesome/css/all.css';
import {AskUsernameForLogin, AskPasswordForLogin} from './Login';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            username: '',
        }
    }

    render() {
        let askUsername = <AskUsernameForLogin
            next={(username) => {
                this.setState({
                    username: username,
                    type: 1,
                });
            }}
        />;
        let askPassword = <AskPasswordForLogin
            username={this.state.username}
            cancel={() => {
                this.setState({
                    username: '',
                    type: 0,
                });
            }}
        />;
        let put = <AskUsernameForLogin/>;
        switch (this.state.type) {
            case 0:
                put = this.state.username !== '' ? askPassword : askUsername;
                break;
            case 1:
                put = this.state.username !== '' ? askPassword : askUsername;
                break;
            default:
                break;
        }
        return (
            <div className="start-page">
                <div className="top-bar">

                </div>
                <div className="start-form centered">
                    {put}
                </div>
                <div className="bottom-bar centered">
                    <div className="logo">

                    </div>
                </div>
            </div>
        );
    }
}

export default StartPage;