from flask import Flask, jsonify
from geopy.geocoders import Nominatim

app = Flask(__name__)

# Initialize the geocoder
geolocator = Nominatim(user_agent="geocoder")

@app.route('/geocode', methods=['GET'])
def geocode():
    # Hardcoded address
    address = "1600 Amphitheatre Parkway, Mountain View, CA 94043, United States"
    
    # Perform geocoding
    location = geolocator.geocode(address)
    
    if location is None:
        return jsonify({'error': 'Geocoding failed. Unable to find coordinates for the given address.'}), 500
    
    # Extract latitude and longitude
    latitude = location.latitude
    longitude = location.longitude

    console.log(latitude, longitude);
    
    return jsonify({'latitude': latitude, 'longitude': longitude})

if __name__ == '__main__':
    app.run(debug=True)
