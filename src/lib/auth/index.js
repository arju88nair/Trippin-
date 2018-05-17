import { fbLoginPermissions } from '../../constants/index';
import firebase from '../../config/firebase';
import Auth from '../../config/auth';
import Homescreen from '../../Components/Homescreen'

export const handleFbLogin = () => (
  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
      firebase.auth()
        .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
        this.props.navigation.navigate('Home');


    })
    .catch((err) => this.onError && this.onError(err))
);
