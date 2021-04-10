import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/styles.scss"
import router from './router'
import store from './store'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import SimpleVueValidation from 'simple-vue-validator';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDxtbk3M-hnemxClXMnagRuZIubE4IEkWM",
    authDomain: "ecomerce-firebase.firebaseapp.com",
    projectId: "ecomerce-firebase",
    storageBucket: "ecomerce-firebase.appspot.com",
    messagingSenderId: "599779296063",
    appId: "1:599779296063:web:c8fc3729924c7d7135098a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();

createApp(App).use(store).use(router).use(SimpleVueValidation).mount('#app')
