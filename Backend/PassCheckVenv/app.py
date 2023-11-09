from flask import Flask, request, jsonify
from flask_cors import CORS
import hashlib
import sqlite3

app = Flask(__name__)
CORS(app)

#swap this depending on what database/name you are using
database_path = "Database/password_checkeromega.db"

def check_password(password):
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    
    hashed_password = password
    # hashed_password = hashlib.sha1(password.encode('utf-8')).hexdigest()
    # hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    cursor.execute('SELECT COUNT(*) FROM passwords WHERE hashed_password=?', (hashed_password,))
    result = cursor.fetchone()
    
    conn.close()
    return result[0] > 0

@app.route('/check_password', methods=['POST'])
def check_password_endpoint():
    data = request.json
    password = data.get('password')
    
    if check_password(password):
        return jsonify({'status': 'bad password'})
    else:
        return jsonify({'status': 'good password'})

if __name__ == '__main__':
    app.run()