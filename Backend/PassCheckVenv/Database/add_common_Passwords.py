import sqlite3
import os
import hashlib

def sha1_hash(text):
    return hashlib.sha1(text.encode('utf-8')).hexdigest()

def insert_password_and_hash(cur, password, hashed_password):
    cur.execute('''
    INSERT INTO passwords (password, hashed_password)
    VALUES (?, ?) 
    ON CONFLICT(hashed_password) DO NOTHING;
    ''', (password, hashed_password))

def process_file(file_path, cur):
    with open(file_path, 'r') as file:
        for password in file:
            password = password.strip()  # Remove leading/trailing whitespace
            if password:  # Ignore blank lines
                # Hash the password and insert it along with the original password into the database
                hashed_password = sha1_hash(password)
                insert_password_and_hash(cur, password, hashed_password)

# Function to get a list of all files in a directory (alphabetically sorted)
def get_files(directory):
    print('Getting files list in memory')
    files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    files.sort()
    return files

# Function to process multiple files and maintain a log
def process_files(directory, num_files, cur, log_file_path):
    print('Processing files')

    processed_files = set()

    # Read the log file (if it exists) to see which files have been processed
    if os.path.exists(log_file_path):
        with open(log_file_path, 'r') as log:
            processed_files = set(line.strip() for line in log)

    # Get all files in the directory
    files = get_files(directory)

    # Filter out files that we've already processed
    files_to_process = [f for f in files if f not in processed_files]

    # Process the files (up to the specified limit)
    for file_name in files_to_process[:num_files]:
        print('Processing file: ' + file_name)
        file_path = os.path.join(directory, file_name)
        process_file(file_path, cur)
        processed_files.add(file_name)

        # Update the log file
        with open(log_file_path, 'a') as log:  # Open the log file at the specified path
            log.write(file_name + '\n')

def main():
    # Setup database connection
    script_dir = os.path.dirname(os.path.abspath(__file__)) 
    db_name = "password_checker"                             
    db_path = os.path.join(script_dir, db_name + ".db")       
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()

    file_path = os.path.join(script_dir, "Passwords/10000_common_passwords_unfiltered.txt")  

    # Process the specific file
    print('Processing file: ' + file_path)
    process_file(file_path, cur)

    # Commit the transaction
    conn.commit()

    # Close the connection
    conn.close()

if __name__ == "__main__":
    main()
