import axios from 'axios';

export const checkPassword = async (password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/check_password",
      { password }
    );
    return response.data.status;
  } catch (error) {
    console.error("Error checking password", error);
    return "error";
  }
};

