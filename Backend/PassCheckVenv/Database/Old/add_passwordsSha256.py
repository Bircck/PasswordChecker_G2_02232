import sqlite3
import os
import hashlib

# Get the directory of the current script file
script_dir = os.path.dirname(os.path.abspath(__file__))  # current file directory
db_name = "password_checker"                             # name
db_path = os.path.join(script_dir, db_name+".db")        # path

# Connect to the database
conn = sqlite3.connect(db_path)

# Create a new SQLite cursor
cur = conn.cursor()

# The plaintext password
password = '123456'

# Hash the password using SHA-256
hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

# Upsert the record
cur.execute('''
INSERT INTO passwords (password, hashed_password)
VALUES (?, ?) 
ON CONFLICT(hashed_password) DO NOTHING;
''', (password, hashed_password))

# Commit the transaction
conn.commit()

# Close the connection
conn.close()
