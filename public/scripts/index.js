// Initialize Firebase
var config = {
  apiKey: "AIzaSyCGs6PPE24qCPj5n8rDXPEe9I4oFPSwvAc",
  authDomain: "food-lei.firebaseapp.com",
  databaseURL: "https://food-lei.firebaseio.com",
  projectId: "food-lei",
  storageBucket: "food-lei.appspot.com",
  messagingSenderId: "1096372040144"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

// Get a reference to the database service
var database = firebase.database();


var app = new Vue({
  el: '#app',
  delimiters: ["[[","]]"],
  data: {
    message: 'Hello Vue!',
    user: null
  },
  methods: {
    login: function(event) {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("Signing in");
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user);
        app.user = user;
      }).catch(function(error) {
        console.log("Sign in error");
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage);
      });
    },
    logout: function(event) {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        app.user = null
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    app.user = user
  }
});