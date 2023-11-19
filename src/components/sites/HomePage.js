import React, {useEffect, useState} from 'react';
import Badge from 'react-bootstrap/Badge';
import {getUsers} from "../../axiosConfig";
import "./homepage.css"

function Basic({liczba}) {
    return (
        <div>
            <h1>
                Aktualnie na siłowni: <Badge bg="secondary">{liczba}</Badge>
            </h1>
        </div>
    );
}

function HomePage() {

    const [ctr, setCtr] = useState("");

    useEffect(() => {
        getUsers()
            .then(response => {
                if (response.data && response.data.inGym !== undefined) {
                    console.log("Udalo sie");
                    setCtr(response.data.inGym);
                    console.log(response.data.inGym);
                } else {
                    console.error('Invalid data received');
                    setCtr("nie wiadomo");
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setCtr("nie wiadomo");
            });
    }, []);


    return (
        <div>
            <center>
                <div>
                <Basic liczba={ctr}/>
                    <img className="image-with-border" src="/images/gymIcon.jpg" alt="" width="512" height="512"/>
                </div>
            </center>
        </div>
    );
}

export default HomePage;
