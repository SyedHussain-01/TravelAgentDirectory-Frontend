import routes from "../common/utilities/apiRoutes/routes";
import { Get, Update } from "../common/utilities/services/axiosbase";

export const getPackage = async (id) => {
  const data = {
    agent_id: id,
  };
  try {
    const response = await Get(routes.get_package, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomPackage = async () => {
  
  try {
    const response = await Get(routes.get_custom_package);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePackage = async (id) => {
  const data = {
    package_id: id,
  };
  try {
    const response = await Get(routes.get_single_package, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const proceedPackage = async (agent_id, package_id, user_id) => {
  const data = {
    package_id,
    agent_id,
    user_id
  };
  try {
    const response = await Update(routes.proceed_package, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postComment = async (package_id, comment, rating) => {
  const data = {
    comment,
    rating,
  };
  const query = {
    package_id,
  };
  try {
    const response = await Update(routes.feedback_package, data, query);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
