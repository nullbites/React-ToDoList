var app_fireBase = {};
(function()
{
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPuq1ZY3c8Scc5pzZwZL44dZJIE2T4kFU",
    authDomain: "todolist-fddi.firebaseapp.com",
    databaseURL: "https://todolist-fddi.firebaseio.com",
    projectId: "todolist-fddi",
    storageBucket: "todolist-fddi.appspot.com",
    messagingSenderId: "275379923498"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})()