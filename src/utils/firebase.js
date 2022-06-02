import { initializeApp  } from "firebase/app";

const {
    REACT_APP_firebase_apiKey,
    REACT_APP_firebase_authDomain,
    REACT_APP_firebase_databaseURL,
    REACT_APP_firebase_projectId,
    REACT_APP_firebase_storageBucket,
    REACT_APP_firebase_messagingSenderId,
    REACT_APP_firebase_appId,
    REACT_APP_firebase_measurementId
} = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_firebase_apiKey,
    authDomain: REACT_APP_firebase_authDomain,
    databaseURL: REACT_APP_firebase_databaseURL,
    projectId: REACT_APP_firebase_projectId,
    storageBucket: REACT_APP_firebase_storageBucket,
    messagingSenderId: REACT_APP_firebase_messagingSenderId,
    appId: REACT_APP_firebase_appId,
    measurementId: REACT_APP_firebase_measurementId
};

export default firebaseConf = initializeApp(firebaseConfig);