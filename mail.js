const firebaseConfig = {
    apiKey: "AIzaSyBlkRjiKn7hop_5MwlmRlAIeD2VhR4xMFQ",
    authDomain: "contact-form-d793c.firebaseapp.com",
    databaseURL: "https://contact-form-d793c-default-rtdb.firebaseio.com",
    projectId: "contact-form-d793c",
    storageBucket: "contact-form-d793c.appspot.com",
    messagingSenderId: "908147276448",
    appId: "1:908147276448:web:48f1e32ec37d9067de67c5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference of your db
  var contactformDB=firebase.database().ref("contact-form");
  document.getElementById("contact-form").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name=getElementVal("name");
    var email=getElementVal("email");
    var phone=getElementVal("phone");
    var message=getElementVal("message");

    //console.log(name, email, phone, message);
    saveMessages=(name, email, phone, message);

    document.querySelector(".alert").style.display="block";

    setTimeout(() => {
        document.querySelector(".alert").style.display="none";
    },3000);

    //reset form
    document.getElementById("contact-form").reset();
  }

  const saveMessages=(name, email, phone, message)=>{
    var newContactForm=contactformDB.push();

    newContactForm.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
  };

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };
