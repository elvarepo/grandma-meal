import firebase from 'firebase';

const firebaseConfig = { 
  apiKey: "AIzaSyC7tuw-XZfgR52mDDfR5Oyn2CHkEkiFRAs",
  authDomain: "grandmas-meal.firebaseapp.com",
  databaseURL: "https://grandmas-meal-default-rtdb.firebaseio.com",
  projectId: "grandmas-meal",
  storageBucket: "grandmas-meal.appspot.com",
  messagingSenderId: "933147377952",
  appId: "1:933147377952:web:593e70eacea07ee3285745",
  measurementId: "G-74MYTQ7M35"
}; 
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);