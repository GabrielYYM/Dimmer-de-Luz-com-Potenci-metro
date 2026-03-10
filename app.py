from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/update_slider', methods=['POST'])
def update_slider():
    data = request.get_json()
    
    THRESHOLD = 70
    
    value = int(data.get('value', 0))
    is_active = value >= THRESHOLD
    
    response = {
        "led_opacity": value / 100,
        "relay_color": "limegreen" if is_active else "darkred",
        "lamp_color": "yellow" if is_active else "#333",
        "lamp_shadow": "0 0 30px yellow" if is_active else "none"
    }
    
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)