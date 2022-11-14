
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBmwy7q62D2lMX1EMpta0KShpptf2KoWIM",
    authDomain: "class-test-64a9e.firebaseapp.com",
    databaseURL: "https://class-test-64a9e-default-rtdb.firebaseio.com",
    projectId: "class-test-64a9e",
    storageBucket: "class-test-64a9e.appspot.com",
    messagingSenderId: "91309811891",
    appId: "1:91309811891:web:09afe8ccd7211b42b768c6"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Hello "+user_name+"!"
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "vlitter_page.html";
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name"+Room_names);
    row="<div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="vlitter_page.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
}
