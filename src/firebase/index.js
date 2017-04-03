import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCThEHv6y4Nkp1QZrGawsGMVleTFlH_jDQ',
    authDomain: 'reactjs-auth.firebaseapp.com',
    databaseURL: 'https://reactjs-auth.firebaseio.com',
    projectId: 'reactjs-auth',
    storageBucket: 'reactjs-auth.appspot.com',
    messagingSenderId: '203876394688'
};
firebase.initializeApp(config);

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

const firebaseRef = firebase.database().ref();

firebaseRef.on('value', snapshot => console.log(snapshot.val()));
export default firebaseRef;
