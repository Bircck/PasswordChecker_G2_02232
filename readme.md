# Password Checker Service


## Introduction

The Password Checker Service is a web application designed to help users ensure they are using secure passwords. By comparing input passwords against a database of commonly used passwords, the service can warn users about potentially unsafe choices. The project utilizes a React frontend and a Python (Flask) backend, integrated with a SQLite database to store the list of common passwords.

## Table of contents

- [Password Checker Service](#password-checker-service)
  - [Introduction](#introduction)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
    - [Version Control](#version-control)
  - [Security](#security)
  - [Future Enhancements](#future-enhancements)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Installation

To run the Password Checker Service locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- [Python 3](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/)

### Backend Setup

1. Clone the repository to your local machine.
2. Navigate to the backend directory.
3. Create a Python virtual environment:
   ```sh
   python -m venv PassCheckVenv
4. Activate the virtual environment:
    ```sh
    source PassCheckVenv/bin/activate  # On Windows use `.\PassCheckVenv\Scripts\activate`
5. Install the necessary Python packages:
    ```sh
    pip install flask flask-cors
6. Run the Flask application:
    ```sh
    python app.py
### Frontend Setup
1. Navigate to the frontend directory.
2. Install the necessary npm packages:
    ```sh
    npm install
3. Start the React application:
    ```sh
    npm start
Now, you should be able to access the application at http://localhost:3000.

## Usage
1. Open the web application in a browser.
2. Enter a password into the input field.
3. Click the "Check Password" button to check the password's security.

## Technologies Used

This project is built with a variety of modern technologies to ensure a fast, responsive, and secure user experience. Below we outline the key technologies utilized:

### Frontend
- **React**: A JavaScript library for building user interfaces, known for its speed, simplicity, and scalability.
- **CSS**: Used to style the React components and ensure a responsive design.
- **HTML**: Utilized within React components to structure the content of the web application.

### Backend
- **Python**: A high-level, versatile programming language used to create the backend of the application.
- **Flask**: A lightweight WSGI web application framework in Python, facilitating the setup of the backend service.

### Database
- **SQLite**: A C-library that provides a lightweight disk-based database, offering a self-contained, serverless, zero-configuration, and transactional SQL database engine.

### Version Control
- **Git**: Utilized for version control, allowing for efficient tracking and management of project developments.
- **GitHub**: The hosting platform for the project repository, facilitating collaboration and version control through Git.

By integrating these technologies, the Password Checker Service offers a streamlined, user-friendly platform to enhance password security. Whether you're a user checking your password or a developer keen to explore the code, you can anticipate a project built with industry-leading tools and practices.

## Security

Security is a cornerstone of the Password Checker Service. We adhere to several best practices to maintain a high level of security, including:

- **Secure Transmission**: Ensuring that all communications between the frontend and the backend are transmitted securely.
- **Hashing**: Storing passwords in the database in a hashed format to enhance security.
- **Input Validation**: Implementing validation to guard against SQL injection and other potential security vulnerabilities.
- **Regular Updates**: Regularly updating all project dependencies to their latest versions to benefit from security updates and patches.

Users and developers are encouraged to report any security issues they identify by [opening an issue](https://github.com/your-github-username/password-checker-service/issues) on the GitHub repository.

## Future Enhancements

As we continue to develop the Password Checker Service, we have identified several potential enhancements to further improve the platform, including:

- **Multi-language Support**: Expanding the service to support multiple languages, enhancing accessibility for users around the globe.
- **API Enhancements**: Developing a public API to allow other services to integrate with the Password Checker Service.
- **Reporting Tool**: Implementing a tool to allow users to report commonly used passwords that are not yet in the database.
- **User Accounts**: Creating a system for user accounts, enabling users to track their password history and receive personalized advice.

We welcome feedback and suggestions for future developments. If you have an idea for an enhancement, please share it with us by [opening an issue](https://github.com/your-github-username/password-checker-service/issues) on the GitHub repository.

## Contributing
If you would like to contribute to this project, feel free to fork the repository, create a feature branch, and open a Pull Request.

## License
This project is open-source and available under the MIT License.

## Acknowledgements
Thanks to the open-source community for the continuous inspiration and support.
Contact
For any queries or suggestions, feel free to open an issue on the GitHub repository.

Password strength checker based on lerida  
https://codepen.io/lerida/pen/oNjdPGq