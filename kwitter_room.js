
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC7VYduhg_HSByRCiiYpT33tcm6tfcQYDI",
      authDomain: "kwitter-c6269.firebaseapp.com",
      databaseURL: "https://kwitter-c6269-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6269",
      storageBucket: "kwitter-c6269.appspot.com",
      messagingSenderId: "877531804701",
      appId: "1:877531804701:web:6af0a69f3c33a0de4942f4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem('user_name');
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    
    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - "+ Room_names);
        row = "<div class='room_name' id="+ Room_names+"  onclick='redirectToRoom(this.id)'>#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoom(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


