var firebaseConfig = {
    apiKey: "AIzaSyBup04JFBdGgyNQlxIP7H92qZ7KvGdqPvk",
    authDomain: "review-my-project-282af.firebaseapp.com",
    databaseURL: "https://review-my-project-282af-default-rtdb.firebaseio.com",
    projectId: "review-my-project-282af",
    storageBucket: "review-my-project-282af.appspot.com",
    messagingSenderId: "1090972319214",
    appId: "1:1090972319214:web:08592cdeda3db7f5cae2ff"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Reference for form collection(3)
    let category= firebase.database().ref('All');
    let category1 = firebase.database().ref('Java');
    let category2 = firebase.database().ref('Python');
    let category3 = firebase.database().ref('IOT');
    let category4 = firebase.database().ref('C&C++');
    let category5 = firebase.database().ref('Artificial Intelligence');
    let category6 = firebase.database().ref('Android Development');
    let category7 = firebase.database().ref('Full Stack Development');
    let category8 = firebase.database().ref('AWS-cloud computing');
    let category9 = firebase.database().ref('Machine Learning');
    let category10 = firebase.database().ref('Ethical Hacking');
    let category11= firebase.database().ref('AutoCAD');
    let category12 = firebase.database().ref('SOLIDWORKS');
    let category13 = firebase.database().ref('Mobile Games');
    let category14 = firebase.database().ref('Graphic Design'); 
    let category15 = firebase.database().ref('Interior Designing');
    
    //listen for submit event//(1)
    document.getElementById('uploadform').addEventListener('submit', formSubmit);
    
    //Submit form(1.2)
    function formSubmit(e) {
      e.preventDefault();
      // Get Values from the DOM
      
      let postcategory = document.querySelector('#selectcategory').value;
    
      //send message values
      sendMessage(postcategory);
  
      if(postcategory == "java")
      {
        cat1(postcategory);
      }
      else if(postcategory == "python")
      {
        cat2(postcategory);
      }
      else if(postcategory == "iot")
      {
        cat3(postcategory);
      }
      else if(postcategory == "c")
      {
        cat4(postcategory);
      }
      else if(postcategory == "ai")
      {
        cat5(postcategory);
      }
      else if(postcategory == "android")
      {
        cat6(postcategory);
      }
      else if(postcategory == "fullstack Development")
      {
        cat7(postcategory);
      }
      else if(postcategory == "aws")
      {
        cat8(postcategory);
      }
      else if(postcategory =="ML")
      {
        cat9(postcategory);
      }
      else if(postcategory == "Ethical Hacking")
      {
        cat10(postcategory);
      }
      else if(postcategory == "AutoCAD")
      {
        cat11(postcategory);
      }
      else if(postcategory == "SOLIDWORKS")
      {
        cat12(postcategory);
      }
      else if(postcategory == "Mobile Games")
      {
        cat13(postcategory);
      }
      else if(postcategory == "Graphic Design")
      {
        cat14(postcategory);
      }
      else if(postcategory == "Interior Designing")
      {
        cat15(postcategory);
      }
      
    
      //Show Alert Message(5)
      
    
      //Hide Alert Message After Seven Seconds(6)
      
    
      //Form Reset After Submission(7)
      document.getElementById('uploadform').reset();
    }
    
    //Send Message to Firebase(4)
    
    function sendMessage(postcategory) {
      let newFormMessage = category.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat1(postcategory) {
      let newFormMessage = category1.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat2(postcategory) {
      let newFormMessage = category2.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat3(postcategory) {
      let newFormMessage = category3.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat4(postcategory) {
      let newFormMessage = category4.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat5(postcategory) {
      let newFormMessage = category5.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat6(postcategory) {
      let newFormMessage = category6.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat7(postcategory) {
      let newFormMessage = category7.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat8(postcategory) {
      let newFormMessage = category8.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat9(postcategory) {
      let newFormMessage = category9.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat10(postcategory) {
      let newFormMessage = category10.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat11(postcategory) {
      let newFormMessage = category11.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat12(postcategory) {
      let newFormMessage = category12.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat13(postcategory) {
      let newFormMessage = category13.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat14(postcategory) {
      let newFormMessage = category14.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
  
    function cat15(postcategory) {
      let newFormMessage = category15.push();
      newFormMessage.set({
        Postcategory:postcategory
      });
    }
    
  