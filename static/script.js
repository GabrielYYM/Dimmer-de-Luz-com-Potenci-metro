const slider = document.getElementById("slider");
const led = document.getElementById("led");
const relay = document.getElementById("relay");
const lamp = document.getElementById("lamp");

const THRESHOLD = 70;

slider.addEventListener("input", () => {
    let value = slider.value;

    led.style.opacity = value / 100;

    if (value >= THRESHOLD) {
        activateRelay();
    } else {
        deactivateRelay();
    }
});

function activateRelay() {
    relay.style.background = "limegreen";
    lamp.style.background = "yellow";
    lamp.style.boxShadow = "0 0 30px yellow";
}

function deactivateRelay() {
    relay.style.background = "darkred";
    lamp.style.background = "#333";
    lamp.style.boxShadow = "none";
}