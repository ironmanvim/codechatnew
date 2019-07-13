import React from 'react'
import DropMenu from '../Components/DropMenu';
import '../Assets/css/FrontLayout.css';
import Logo from '../Assets/images/logo2.png';

class FrontLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            drop_menu: Array(4).fill(false),
        };
    }
    render() {
        return (
            <div className="front-page">
                <div className={this.state.show ? "show hide centered": "show centered"} onMouseOver={() => {this.showOrHide()}}>
                    {/*<i className="fas fa-angle-up"> </i>*/}
                </div>
                <div className={this.state.show ? "display": "display max"}>

                </div>
                <div className={this.state.show ? "nav-bar": "nav-bar hide"}>
                    <div className="center-panel centered">
                        <i className="fas fa-search"> </i>
                        <input type="text"/>
                    </div>
                    <div className="left-panel">
                        <div className="logo centered">
                            <img src={Logo} alt="Logo"/>
                        </div>
                        <div className="hide centered" onClick={() => {this.showOrHide()}}>
                            <i className="fas fa-angle-down"> </i>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className="messages centered">
                            <i className="far fa-comment-dots" onClick={() => {this.showOrHideDropMenu(0)}}> </i>
                            <DropMenu show={this.state.drop_menu[0]}>
                                Hello
                            </DropMenu>
                        </div>
                        <div className="friends-requests centered">
                            <i className="fas fa-user-friends" onClick={() => {this.showOrHideDropMenu(1)}}> </i>
                            <DropMenu show={this.state.drop_menu[1]}>
                                Hello
                            </DropMenu>
                        </div>
                        <div className="notifications centered">
                            <i className="fas fa-bell" onClick={() => {this.showOrHideDropMenu(2)}}> </i>
                            <DropMenu show={this.state.drop_menu[2]}>
                                Hello
                            </DropMenu>
                        </div>
                        <div className="settings centered">
                            <i className="fas fa-cog" onClick={() => {this.showOrHideDropMenu(3)}}> </i>
                            <DropMenu show={this.state.drop_menu[3]}>
                                Hello
                            </DropMenu>
                        </div>
                        <div className="logout centered">
                            <i className="fas fa-power-off"> </i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showOrHide() {
        let array = Array(4).fill(false);
        this.setState({
            show: !this.state.show,
            drop_menu: array,
        });
    }
    showOrHideDropMenu(i) {
        let array = Array(4).fill(false);
        array[i] = !this.state.drop_menu[i];
        this.setState({
            drop_menu: array,
        });
    }
}

export default FrontLayout;