const slider = document.getElementById("slider");
const led = document.getElementById("led");
const relay = document.getElementById("relay");
const lamp = document.getElementById("lamp");

slider.addEventListener("input", async () => {
    let value = slider.value;

    const response = await fetch('/update_slider', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ value: value })
    });

    const data = await response.json();

    led.style.opacity = data.led_opacity;
    relay.style.background = data.relay_color;
    lamp.style.background = data.lamp_color;
    lamp.style.boxShadow = data.lamp_shadow;
});