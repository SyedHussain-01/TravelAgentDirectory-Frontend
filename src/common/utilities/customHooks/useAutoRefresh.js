import { useEffect } from 'react';
import { AuthService } from '../services/request';

function useAutoRefresh() {
  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh_token');

    if (refreshToken) {
      const token = refreshToken.split(' ')[1]
      const refreshInterval = setInterval(async () => {
        try {
          const { authorization } = await AuthService.refreshAccessToken(token);
          localStorage.setItem('access_token', authorization);
        } catch (error) {
          console.error(error);
        }
      }, 5 * 60 * 1000); // Refresh every 5 minutes

      return () => {
        clearInterval(refreshInterval);
      };
    }
  }, []);
}

export default useAutoRefresh;
