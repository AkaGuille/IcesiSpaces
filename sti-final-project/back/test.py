from flask import  Flask, request, jsonify

app = Flask(__name__)

#route of the request
@app.route("/")
def home():
    return "Home"

#GET (REQUEST DATA)
#POST (CREATE RESOURCE)
#PUT (UPDATE RESOURCE)
#DELETE (DELETE RESOURCE)

#Path parameter
@app.route("/get-user/<user_id>")
def get_user(user_id):
    user_data = {
        "user_id": user_id,
        "name": "Jhon Doe",
        "email": "jhon.doe@example.com"
    }

    #query parameter
    extra = request.args.get("extra")

    if extra:
        user_data["extra"] = extra

    return jsonify(user_data), 200

#POST
@app.route("/create-user", methods=["POST"])
def create_user():
    #if request.method == "POST":
    data = request.get_json()

    return jsonify(data); 201

if __name__ == "__main__":
    app.run(debug=True)