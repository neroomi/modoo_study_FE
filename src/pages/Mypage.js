import React from 'react';

const Mypage = () => {
    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <div name="Account Information">
                    <h5>Username</h5>
                        <input type="text" value="{username}"/>         
                    <h5>picture</h5>
                        <input type="file" onChange="{setFile.bind(this)}"/>
                        <input type="button" onClick="{postFile}" value="upload"/>
                    <h5>email</h5>
                        <input type="text" value="{email}" readonly/>
                    <h5>region</h5>
                        <div class="dropdown" name="region">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                </div>
                <div name="Emblem">
                    <h5>My Emblem</h5>
                    <a href="/EmblemModal"><input type="button" value="Manage"/></a>
                    <div>
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </div>
                <div name="Certificate">
                    <h5>Certificates</h5>
                    <a href="CertificateModal"><input type="button" value="Register"/></a>
                    <div class="dropdown" name="certificate">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mypage;