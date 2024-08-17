import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDaN9hcpB5U-TMoNvQczua_5M2mvXgu0Hg",
    authDomain: "vnesefooddetection.firebaseapp.com",
    databaseURL: "https://vnesefooddetection-default-rtdb.firebaseio.com",
    projectId: "vnesefooddetection",
    storageBucket: "vnesefooddetection.appspot.com",
    messagingSenderId: "683300645962",
    appId: "1:683300645962:web:9ad120ad6fdc1748770ab3",
  };

const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};
