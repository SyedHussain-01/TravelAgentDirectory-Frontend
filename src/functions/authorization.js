import routes from "../common/utilities/apiRoutes/routes";
import { Service } from "./../common/utilities/services/request";
import { Post } from "./../common/utilities/services/axiosbase";

export const signup = async () => {
  try {
    const date = new Date();
    date.setDate(27);
    date.setMonth(5);
    date.setFullYear(2001);
    const data = {
      name: "Person2",
      email: "person2@gmail.com",
      pass: "person2",
      phone: 93928573948,
      city: "Karachi",
      date_of_birth: date,
      user_type: 1,
    };
    const result = await Post(routes.signUp, data);
    console.log(result);
  } catch (error) {
    console.log(error)
  }
};

export const signin = async () => {
  try {
    const data = {
      email: "person2@gmail.com",
      pass: "person2",
    };
    const { authorization, refresh_token } = await Service.signIn(
      data.email,
      data.pass
    );
    localStorage.setItem("access_token", authorization);
    localStorage.setItem("refresh_token", refresh_token);
  } catch (error) {
    console.log(error);
  }
};
