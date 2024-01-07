import React from 'react';
import ChartComponent from "./chart";
function Profile() {


    return (
        <div className>
            <center>
            <h1>Cześć {localStorage.getItem('userName')}!</h1>
            <h3>Twój karnet jest ważny do {localStorage.getItem('pass')}</h3>
            <br></br>
            <br></br>
                <ChartComponent/>
            </center>
        </div>
    );
}

export default Profile;
