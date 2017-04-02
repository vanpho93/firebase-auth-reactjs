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

// export const githubProvider = new firebase.auth.GithubAuthProvider();
const firebaseRef = firebase.database().ref();
export default firebaseRef;
