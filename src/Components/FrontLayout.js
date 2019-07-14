import React from 'react'
import DropMenu from '../Components/DropMenu';
import Chat from '../Components/Chat';
import '../Assets/css/FrontLayout.css';
import Logo from '../Assets/images/logo2.png';

class FrontLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            drop_menu: Array(4).fill(false),
            search_dropdown: false,
        };
    }

    render() {
        import("../Assets/css/drop-messages.css");
        import("../Assets/css/drop-friend-request.css");
        import("../Assets/css/drop-settings.css");
        return (
            <div className="front-page">
                <div className={this.state.show ? "show hide centered" : "show centered"} onMouseOver={() => {
                    this.showOrHide()
                }}>
                    {/*<i className="fas fa-angle-up"> </i>*/}
                </div>
                <div className={this.state.show ? "display" : "display max"}>
                    <Chat/>
                </div>
                <div className={this.state.show ? "nav-bar" : "nav-bar hide"}>
                    <div className="center-panel centered">
                        <div className="search-bar centered">
                            <label htmlFor="search"><i className="fas fa-search"> </i></label>
                            <input type="text" id="search"
                                   onFocus={() => {
                                       this.setState({
                                           search_dropdown: true,
                                       });
                                   }}
                                   onBlur={() => {
                                       this.setState({
                                           search_dropdown: false,
                                       });
                                   }}
                            />
                            <DropMenu arrowType="no-arrow" show={this.state.search_dropdown} height="auto"
                                      width="326px">
                                hello
                            </DropMenu>
                        </div>
                    </div>
                    <div className="left-panel">
                        <div className="logo centered">
                            <img src={Logo} alt="Logo"/>
                        </div>
                        <div className="hide centered" onClick={() => {
                            this.showOrHide()
                        }}>
                            <i className="fas fa-angle-down"> </i>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className="messages centered">
                            <i className="far fa-comment-dots" onClick={() => {
                                this.showOrHideDropMenu(0)
                            }}> </i>
                            <DropMenu arrowType="bottom-arrow" show={this.state.drop_menu[0]}>
                                <div className="drop-messages">
                                    <div className="header centered">
                                        Messages
                                    </div>
                                    <div className="body">
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer centered">
                                        show all messages
                                    </div>
                                </div>
                            </DropMenu>
                        </div>
                        <div className="friends-requests centered">
                            <i className="fas fa-user-friends" onClick={() => {
                                this.showOrHideDropMenu(1)
                            }}> </i>
                            <DropMenu arrowType="bottom-arrow" show={this.state.drop_menu[1]}>
                                <div className="drop-friend-request">
                                    <div className="header centered">
                                        Friend Requests
                                    </div>
                                    <div className="body">
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    <button className="accept">Accept</button>
                                                    <button className="reject">Reject</button>
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    <button className="accept">Accept</button>
                                                    <button className="reject">Reject</button>
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    <button className="accept">Accept</button>
                                                    <button className="reject">Reject</button>
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer centered">
                                        Show all requests
                                    </div>
                                </div>
                            </DropMenu>
                        </div>
                        <div className="notifications centered">
                            <i className="fas fa-bell" onClick={() => {
                                this.showOrHideDropMenu(2)
                            }}> </i>
                            <DropMenu arrowType="bottom-arrow" show={this.state.drop_menu[2]}>
                                <div className="drop-messages">
                                    <div className="header centered">
                                        Messages
                                    </div>
                                    <div className="body">
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-image centered">
                                                <i className="fas fa-user"> </i>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    Username
                                                </div>
                                                <div className="item-desc">
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                    loren Ipsum loren Ipsum loren Ipsum
                                                </div>
                                            </div>
                                            <div className="time">
                                                2:30
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer centered">
                                        clear all
                                    </div>
                                </div>
                            </DropMenu>
                        </div>
                        <div className="settings centered">
                            <i className="fas fa-cog" onClick={() => {
                                this.showOrHideDropMenu(3)
                            }}> </i>
                            <DropMenu arrowType="bottom-arrow" show={this.state.drop_menu[3]} height="150px">
                                <div className="drop-settings">
                                    <div className="header centered">
                                        Settings
                                    </div>
                                    <div className="body">
                                        <div className="item centered">My Profile</div>
                                        <div className="item centered">Account</div>
                                    </div>
                                </div>
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