from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    start_lat = float(request.form['start_lat'])
    start_lon = float(request.form['start_lon'])
    end_lat = float(request.form['end_lat'])
    end_lon = float(request.form['end_lon'])

    return {
        'start_lat': start_lat,
        'start_lon': start_lon,
        'end_lat': end_lat,
        'end_lon': end_lon
    }

if __name__ == '__main__':
    app.run(debug=True)
