import routes from "../common/utilities/apiRoutes/routes";
import { Service } from "./../common/utilities/services/request";
import { Post } from "./../common/utilities/services/axiosbase";

export const signup = async (data) => {
  try {
    const result = await Post(routes.signUp, data);
    return result
  } catch (error) {
    console.log(error)
  }
};

export const signin = async (data) => {
  try {
    const { authorization, refresh_token } = await Service.signIn(
      data.email,
      data.pass
    );
    localStorage.setItem("access_token", authorization);
    localStorage.setItem("refresh_token", refresh_token);
    return authorization;
  } catch (error) {
    console.log(error);
  }
};
