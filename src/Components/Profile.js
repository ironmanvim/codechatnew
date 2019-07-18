import React from "react";

class Profile extends React.Component {
    render() {
        import("../Assets/css/profile.css");
        return (
            <div className="profile">
                <div className="profile-info">
                    <div
                        className="cover"
                        style={{
                            background: "url("+require('../Assets/images/cover_example.png')+")",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}>

                    </div>
                    <div className="info">
                        <div className="profile-picture">
                            <img src={require("../Assets/images/logo2.png")} alt=""/>
                        </div>
                        <div className="profile-name">
                            <div className="actual-name">
                                Vishal Chiluveri
                            </div>
                            <div className="aka-name">
                                (Tony Stark)
                            </div>
                        </div>
                        <div className="basic-info">
                            <div className="dob">
                                <b>DOB:</b> 23-03-1999
                            </div>
                            <div className="lives-in">
                                <b>Lives In:</b> Hyderabad
                            </div>
                            <div className="interests">
                                <b>Interests:</b> Coding, Gaming
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline">

                </div>
            </div>
        );
    }
}

export default Profile;