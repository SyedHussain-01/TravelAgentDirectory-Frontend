import routes from "../common/utilities/apiRoutes/routes";
import { Service } from "./../common/utilities/services/request";
import { Post } from "./../common/utilities/services/axiosbase";

export const signup = async (data) => {
  try {
    const result = await Post(routes.signUp, data);
    return result;
  } catch (error) {
    console.log(error)
  }
};

export const signin = async (userData) => {
  try {
    const { headers, data } = await Service.signIn(
      userData.email,
      userData.pass
    );
    const { _id, name, user_type } = data.data.data
    localStorage.setItem("access_token", headers.authorization);
    localStorage.setItem("refresh_token", headers.refresh_token);
    localStorage.setItem("user_id", _id);
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_type", user_type);
    return data;
  } catch (error) {
    console.log(error);
  }
};
