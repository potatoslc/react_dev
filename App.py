from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/display_choice', methods=['POST'])
def display_choice():
    data = request.get_json()
    choice = data['choice']

    # Process the choice or perform any backend operations
    # Here, we simply return the choice as a JSON response
    return jsonify({'choice': choice})

if __name__ == '__main__':
    app.run(debug=True)
