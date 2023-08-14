import axios from 'axios'

const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }

export const Post = async (route, data) => {
  console.log(data)
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}` + `/${route}`,
      data,
      options
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};
