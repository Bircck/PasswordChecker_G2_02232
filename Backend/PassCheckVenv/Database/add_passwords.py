import sqlite3
import os
import hashlib

# Function to hash the password using SHA-1
def sha1_hash(text):
    return hashlib.sha1(text.encode('utf-8')).hexdigest()

# Function to insert a password into the database
def insert_hash(cur, hashed_password):
    # The password field will remain empty as we only have hashes
    cur.execute('''
    INSERT INTO passwords (password, hashed_password)
    VALUES (NULL, ?) 
    ON CONFLICT(hashed_password) DO NOTHING;
    ''', (hashed_password,))

# Function to process a single file and extract passwords
def process_file(file_path, cur):
    with open(file_path, 'r') as file:
        for hashed_password in file:
            hashed_password = hashed_password.strip()  # Remove leading/trailing whitespace
            if hashed_password:  # Ignore blank lines
                insert_hash(cur, hashed_password)

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
    # Check if the right number of command-line arguments is provided
    # if len(sys.argv) != 3:
    #     print("Usage: python add_passwords.py <passwords_directory> <log_file_path>")
    #     sys.exit(1)

    # passwords_directory = sys.argv[1]  # The first command-line argument (after the script name)
    # log_file_path = sys.argv[2]  # The second command-line argument

    passwords_directory = 'C:/UniversityProjects/AnvendtKrypto/PwnedPasswordsDotNetLocation/pwnedpasswords'  # <-- UPDATE THIS PATH
    log_file_path = 'Backend/PassCheckVenv/Database/processed_files.log'

    # Setup database connection
    script_dir = os.path.dirname(os.path.abspath(__file__))  # current file directory
    db_name = "password_checkeromega"                              # name
    db_path = os.path.join(script_dir, db_name + ".db")       # path
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()

    # Number of files you want to process
    num_files_to_process = 10000  # <-- You can also make this an argument if varying processing loads are needed

    process_files(passwords_directory, num_files_to_process, cur, log_file_path)

    # Commit the transaction
    conn.commit()

    # Close the connection
    conn.close()

if __name__ == "__main__":
    main()