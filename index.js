var firebase = require("firebase/app");


 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDDNhRHsLGb-Ak94I8li8hXO1_EK3rXnRA",
    authDomain: "quiz-rt.firebaseapp.com",
    databaseURL: "https://quiz-rt.firebaseio.com",
    projectId: "quiz-rt",
    storageBucket: "quiz-rt.appspot.com",
    messagingSenderId: "869856549063"
  };
  firebase.initializeApp(config);

  var bigOne = document.getElementById('bigOne');
  var dbRef = firebase.database().ref.child('text');
  dbRef.on('value', snap => bigOne.innerText = snap.val());

// function onSignIn(googleUser){
//     var profile = googleUser.getBasicProfile();
//     $(".g-signin2").css("display","none");
//     $(".data").css("display","block");
//     $("#pic").attr('src', profile.getImageUrl());
//     $("#email").text(profile.getEmail());
// }