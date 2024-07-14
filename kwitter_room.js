const firebaseConfig = {
      apiKey: "AIzaSyBM8HrJ_cM-7dQEzsHJb1HthuFwOHZuFgE",
      authDomain: "kwitter-99d10.firebaseapp.com",
      databaseURL: "https://kwitter-99d10-default-rtdb.firebaseio.com",
      projectId: "kwitter-99d10",
      storageBucket: "kwitter-99d10.appspot.com",
      messagingSenderId: "250519237435",
      appId: "1:250519237435:web:bd6ac51631d79e4a3c3d1e"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("welcome_lbl").innerHTML = "Welcome " + user_name + "!";
function logout() {
      window.location = "index.html";
      localStorage.removeItem("username");
}

function Add() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({purpose:"Adding the Room Name"});
      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";
}

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("list of Room Names" + Room_names);
       var row = "<div class='room_name' id="+ Room_names +" onclick='redirectTo(this.id)'>"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectTo(name) {
      localStorage.setItem("clicked_room_name", name);
      window.location = "kwitter_page.html";
}