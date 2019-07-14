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
        return (
            <div className="front-page">
                <div className={this.state.show ? "show hide centered" : "show centered"} onMouseOver={() => {
                    this.showOrHide()
                }}>
                    {/*<i className="fas fa-angle-up"> </i>*/}
                </div>
                <div className={this.state.show ? "display" : "display max"}>
                    <Chat />
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
                            <DropMenu arrowType="no-arrow" show={this.state.search_dropdown} height="auto" width="326px">
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
                                Hello
                            </DropMenu>
                        </div>
                        <div className="friends-requests centered">
                            <i className="fas fa-user-friends" onClick={() => {
                                this.showOrHideDropMenu(1)
                            }}> </i>
                            <DropMenu arrowType="bottom-arrow" show={this.state.drop_menu[1]}>
                                Hello
                            </DropMenu>
                        </div>
                        <div className="notifications centered">
                            <i className="fas fa-bell" onClick={() => {
                                this.showOrHideDropMenu(2)
                            }}> </i>
                            <DropMenu arrowType="bottom-arrow" show={this.state.drop_menu[2]}>
                                Hello
                            </DropMenu>
                        </div>
                        <div className="settings centered">
                            <i className="fas fa-cog" onClick={() => {
                                this.showOrHideDropMenu(3)
                            }}> </i>
                            <DropMenu arrowType="bottom-arrow" show={this.state.drop_menu[3]}>
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