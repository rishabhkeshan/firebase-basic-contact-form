var firebaseConfig = {
    apiKey: "AIzaSyCzUn_rMUF89vF-hWjadar65J9M1W0a6co",
    authDomain: "contact-form-a5880.firebaseapp.com",
    projectId: "contact-form-a5880",
    storageBucket: "contact-form-a5880.appspot.com",
    messagingSenderId: "90038238376",
    databaseURL:"https://contact-form-a5880-default-rtdb.firebaseio.com/",
    appId: "1:90038238376:web:c8c221fcc8d017cfa8169d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();
  messagesRef=database.ref("message");

  onSubmit=(e)=>{
    e.preventDefault();
    let name= getInputValue("name");
    let email = getInputValue("email");
    let phone = getInputValue("phone");
    let message = getInputValue("message");
    uploadData(name,email,phone,message);
    document.querySelector("#contact_form").reset();

  }
  getInputValue=(id)=>{
      return document.querySelector(`#${id}`).value;
  }
  uploadData=(name,email,phone,message)=>{
      let newMessageRef= messagesRef.push();
      newMessageRef.set({
          name:name,
          emailAddress:email,
          phoneNumber:phone,
          message:message,
      }).then(()=>{
          document.querySelector("#form-status").innerHTML="Submitted Successfully."
      })
      .catch(err=>document.querySelector("#form-status").innerHTML=err);
  }
  document.querySelector("#contact_form").addEventListener("submit",onSubmit);
