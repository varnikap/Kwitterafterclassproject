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

  username = localStorage.getItem("username");

  document.getElementById("welcome").innerHTML = "Welcome " + username + "!";


 

function addroomt()
{
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_room.html"
}

  function getData() 
  {
    firebase.database().ref("/"+ room_name).on('value',function(snapshot) 
  {
    document.getElementById("output").innerHTML ="";
snapshot.forEach
(
  function(childSnapshot) 
  {
    childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Names - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick ='redriectToRoomName(this.id)'># "+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
});});}
getData();

function redriectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location ="kwitter_room.html";
} 










  