export const saveToken = (token) => {
    try {
      localStorage.setItem('profileToken', token);
    } catch (e) {
      console.error('Failed to save the token:', e);
    }
  };
  
  export const getToken = () => {
    try {
      return localStorage.getItem('profileToken');
    } catch (e) {
      console.error('Failed to fetch the token:', e);
    }
  };
  
  export const removeToken = () => {
    try {
      localStorage.removeItem('profileToken');
    } catch (e) {
      console.error('Failed to remove the token:', e);
    }
  };
  