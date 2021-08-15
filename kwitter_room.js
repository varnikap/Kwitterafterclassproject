  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFMQPmzRWbyo1Qk5cM8goHoVQR82qtxVI",
    authDomain: "kwitterdata-63a0c.firebaseapp.com",
    databaseURL: "https://kwitterdata-63a0c-default-rtdb.firebaseio.com",
    projectId: "kwitterdata-63a0c",
    storageBucket: "kwitterdata-63a0c.appspot.com",
    messagingSenderId: "122903433457",
    appId: "1:122903433457:web:16ce07d2923a53c4ead950"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");
  

  function send()
  {
      msg= document.getElementById("message").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
      });
    
      document.getElementById("message").value = "";
  }
  