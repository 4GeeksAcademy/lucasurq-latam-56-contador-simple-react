import React from "react";

function SecondsCounter() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        if (hours === 60) {
            console.log("Llegue");
        }

        document.querySelector(".segundos").innerText = seconds;
        document.querySelector(".minutos").innerText = minutes;
        document.querySelector(".horas").innerText = hours;

    }, 1000);


    return (
        <div className="container-fluid d-flex justify-content-center align-items-center bg-black gap-3">
            <i className="fa-regular fa-clock p-4 bg-dark text-light fs-1 card"></i>
            <div className="bg-dark text-light fs-1 card p-3">0</div>
            <div className="bg-dark text-light fs-1 card p-3">0</div>
            <div className="bg-dark text-light fs-1 card p-3">0</div>
            <div className="horas bg-dark text-light fs-1 card p-3">0</div>
            <div className="minutos bg-dark text-light fs-1 card p-3">0</div>
            <div className="segundos bg-dark text-light fs-1 card p-3">0</div>
        </div>
    );
}

export default SecondsCounter;