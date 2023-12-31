import React from "react";
import "./summary.css";

function Summary({avgUsers, avgTime, newUsers, users}) {
    return (
        <div className="summary-container">
            <center>
            <h2>Podsumowanie danych:</h2>
            <div>
                <span className="constant-tilt-shake">Średnia ilość osób dziennie: {avgUsers}</span>
                <span className="constant-tilt-shake">Średni czas spędzany na siłowni: {avgTime}</span>
            </div>
            <br/>
            <br/>
            <div>
                <span className="constant-tilt-shake">Liczba nowych klientów: {newUsers}</span>
                <span className="constant-tilt-shake">Łączna liczba klientów: {users}</span>
            </div>
            </center>
        </div>
    );
}

export default Summary;