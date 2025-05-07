const firebaseConfig = {
  apiKey: "AIzaSyB-SLPbwEz_Um2S_0dGU7WGmVBCxl_0qic",
  authDomain: "dronasun.firebaseapp.com",
  databaseURL: "https://dronasun-default-rtdb.firebaseio.com",
  projectId: "dronasun",
  storageBucket: "dronasun.firebasestorage.app",
  messagingSenderId: "863267248067",
  appId: "1:863267248067:web:ff56e0114846d4ade24f76",
  measurementId: "G-P9M4SMW6YT"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("commandez");

document.getElementById("commandez").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var lastName = getElementVal("lastName");
    var email = getElementVal("email");
    var cin = getElementVal("cin");
    var numTel = getElementVal("numTel");
    var adresse = getElementVal("adresse");
    var traited = false;

    saveMessages(name, lastName, email , cin, numTel, adresse, traited);
    alert("Your submission has been accapted succefully")
    document.getElementById("commandez").reset();
}

const saveMessages = (name, lastName, email, cin, numTel, adresse, traited) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name +" "+ lastName,
        cin: cin,
        email: email,
        phoneNumber: numTel,
        adresse: adresse,
        traited:traited,
    });
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};


function setListPosition() {
    (document.getElementById("list").className === "active") ? document.getElementById("list").className = "notActive" : document.getElementById("list").className = "active";
}