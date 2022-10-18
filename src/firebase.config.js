import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBJnhXE23TgtnoGhA8OMuWBoP0F7jGuqu0",
    authDomain: "technar-3a620.firebaseapp.com",
    databaseURL: "https://technar-3a620-default-rtdb.firebaseio.com",
    projectId: "technar-3a620",
    storageBucket: "technar-3a620.appspot.com",
    messagingSenderId: "454507785113",
    appId: "1:454507785113:web:9c4d0731888e682b3d8108"
  };

 const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

 const firestore = getFirestore(app)
 const storage = getStorage(app)

 export { app, firestore, storage};