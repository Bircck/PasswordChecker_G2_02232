from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

database_path = "Database\password_checker.db"

def check_password(password):
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    
    cursor.execute('SELECT COUNT(*) FROM passwords WHERE password=?', (password,))
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
