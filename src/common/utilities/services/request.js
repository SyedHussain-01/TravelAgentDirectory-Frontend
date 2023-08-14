import { Post } from './axiosbase';
import routes from '../apiRoutes/routes';

export const AuthService = {
  signIn: async (email, pass) => {
    const data = {
        email,
        pass
    }
    const response = await Post(routes.signIn, data);
    return response.headers;
  },
  refreshAccessToken: async (refreshToken) => {
    const data = {
        refresh_token: refreshToken
    } 
    const response = await Post(routes.refresh_token, data);
    return response.headers;
  },
};

