import sqlite3
import os

# Get the directory of the current script file
script_dir = os.path.dirname(os.path.abspath(__file__))     # current file directory
db_name = "password_checker"                                # name
db_path = os.path.join(script_dir, db_name+".db")           # path
# Connect to the database, creating it at the specified path. If it does not exist, it will be created.
conn = sqlite3.connect(db_path)

# Create a new SQLite cursor
cur = conn.cursor()

# Create a new table with the name 'passwords'
cur.execute('''
CREATE TABLE IF NOT EXISTS passwords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    password TEXT,
    hashed_password TEXT UNIQUE
);
''')

# Commit the transaction
conn.commit()

# Close the connection
conn.close()
