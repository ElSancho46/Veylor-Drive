/* Veylor Drive : réception des notifications en arrière-plan */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyAx6t1aMRNt9ieCd9M68nYTS0TrEjPWNWA",
  authDomain: "convoyeur-de-voiture.firebaseapp.com",
  projectId: "convoyeur-de-voiture",
  storageBucket: "convoyeur-de-voiture.firebasestorage.app",
  messagingSenderId: "227176254265",
  appId: "1:227176254265:web:7e2345d87c11855cf636e8"
});
firebase.messaging();
