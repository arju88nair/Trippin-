import { fbLoginPermissions } from '../../constants/index';
import firebase from '../../config/firebase';
import Auth from '../../config/auth';
import Homescreen from '../../Components/Homescreen'
import { SwitchNavigator } from 'react-navigation';


export const handleFbLogin = () => (
    this.props.navigation.navigate('Home')
  // Auth.Facebook.login(fbLoginPermissions)
  //   .then((token) => {
  //     firebase.auth()
  //       .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
  //       this.props.navigation.navigate('Home');
  //
  //   })
  //   .catch((err) => this.onError && this.onError(err))
);
