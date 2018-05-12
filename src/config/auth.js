import { FBLoginManager } from 'react-native-facebook-login';

const Facebook = {
  login: (permissions) => {
      console.log("E");

    return new Promise((resolve, reject) => {
        console.log("D");
      FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
          console.log("S");
        if (!error) {
          console.log(data);
          resolve(data.credentials.token);
        } else {
          console.log(error);
          reject(error);
        }
      });
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      FBLoginManager.logout((error, data) => {
        if (!error) {
          resolve(true);
        } else {
          reject(error);
        }
      });
    });
  }
}

const Auth = { Facebook };

export default Auth;
