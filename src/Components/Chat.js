import React from "react";

class Chat extends React.Component {
    render() {
        import("../Assets/css/chat.css");
        return (
            <div className="chat">
                <div className="chat-list">
                    <div className="search centered">
                        <label htmlFor="search"><i className="fas fa-search"> </i></label>
                        <input type="text" id="search" />
                    </div>
                    <div className="item-list">
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
                </div>
                <div className="chat-body">
                    <div className="chat-header">
                        <div className="image centered">
                            <i className="fas fa-user"> </i>
                        </div>
                        <div className="info">
                            <div className="name">
                                Username
                            </div>
                            <div className="desc">
                                loren Ipsum loren Ipsum loren Ipsum
                                loren Ipsum loren Ipsum loren Ipsum
                            </div>
                        </div>
                    </div>
                    <div className="chat-messages">
                        <div className="message">
                            <div className="message-you">
                                hello world to you
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-me">
                                hello world to me
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-you">
                                hello world to you
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-you">
                                hello world to you
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-me">
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-you">
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-me">
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-you">
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-me">
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </div>
                        </div>
                        <div className="message">
                            <div className="message-you">
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </div>
                        </div>
                    </div>
                    <div className="chat-send centered">
                        <div className="text">
                            <input type="text"/>
                        </div>
                        <div className="send centered">
                            <i className="far fa-paper-plane"> </i>
                        </div>
                        <div className="attachments centered">
                            <i className="fas fa-paperclip"> </i>
                        </div>
                        <div className="code centered">
                            <i className="fas fa-code"> </i>
                        </div>
                        <div className="emoji centered">
                            <i className="far fa-smile"> </i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;