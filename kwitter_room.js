
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC4oVrTbJdQ31oOwN6yj6wsY8uXtPCDZZA",
    authDomain: "kwitter-a8c14.firebaseapp.com",
    databaseURL: "https://kwitter-a8c14-default-rtdb.firebaseio.com",
    projectId: "kwitter-a8c14",
    storageBucket: "kwitter-a8c14.appspot.com",
    messagingSenderId: "387894849101",
    appId: "1:387894849101:web:fbbb38d23a22d3fd0cf604",
    measurementId: "G-KRJHCNB8Y4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { 
       childKey  = childSnapshot.key;
       Room_names = childKey;
       
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}





getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
