import React from "react";

class Friends extends React.Component {
    render() {
        import("../Assets/css/friends.css");
        return (
            <div className="friends">
                <div className="friend">
                    <div className="header">
                        Friends
                    </div>
                    <div className="body">
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Un friend</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="received-requests">
                    <div className="header">
                        Received Requests
                    </div>
                    <div className="body">
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="accept">Accept</button>
                                    <button className="reject">Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sent-requests">
                    <div className="header">
                        Sent Requests
                    </div>
                    <div className="body">
                        <div className="item">
                            <div className="item-pic">
                                <i className="fas fa-user"> </i>
                            </div>
                            <div className="item-name-controls">
                                <div className="item-name">
                                    Username
                                </div>
                                <div className="item-controls">
                                    <button className="reject">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Friends;