import axios from "axios";
import getUserData from "./../customHooks/getUserData";

export const Post = async (route, data) => {
  const user_data = getUserData();
  try {
    let query = ``
    if(user_data.id && user_data.name && user_data.type){
      query = `?id=${user_data.id}&name=${user_data.name}&type=${user_data.type}`
    }
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}` +
        `/${route}` +
        query,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...(user_data.token ? {"Authorization": user_data.token} : {})
        },    
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const Get = async (route, data={}) => {
  const user_data = getUserData();
  try {
    let query = ``
    if(user_data.id && user_data.name && user_data.type){
      query = `?id=${user_data.id}&name=${user_data.name}&type=${user_data.type}`
    }
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}` +
        `/${route}` +
        query,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...(user_data.token ? {"Authorization": user_data.token} : {})
        },
        params: data    
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const Update = async (route, data) => {
  const user_data = getUserData();
  try {
    let query = ``
    if(user_data.id && user_data.name && user_data.type){
      query = `?id=${user_data.id}&name=${user_data.name}&type=${user_data.type}`
    }
    const response = await axios.put(
      `${process.env.REACT_APP_BASE_URL}` +
        `/${route}` +
        query,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...(user_data.token ? {"Authorization": user_data.token} : {})
        },    
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};
