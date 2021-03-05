//  Javascript is Connected 
console.log("Connectd");


//  Connecting Firebase to WebApp
var firebaseConfig = {
    apiKey: "AIzaSyBup04JFBdGgyNQlxIP7H92qZ7KvGdqPvk",
    authDomain: "review-my-project-282af.firebaseapp.com",
    databaseURL: "https://review-my-project-282af-default-rtdb.firebaseio.com",
    projectId: "review-my-project-282af",
    storageBucket: "review-my-project-282af.appspot.com",
    messagingSenderId: "1090972319214",
    appId: "1:1090972319214:web:08592cdeda3db7f5cae2ff"
  };

  // Configuring the firebase
  firebase.initializeApp(firebaseConfig);

  //  Connecting to my required database
  let post = firebase.database().ref("post_sorting");

  //  Function to add object into firebase real-time database
  
  //  let newPost = post.push();
  //  newPost.set({
  //    comments:250,
  //    content:"Is it okay for my 5 year old autistic cousin with violent tendencies to play GTA V?",
  //    image:"images/avatars/avatar-16.png",
  //    like:1274,
  //    time:2,
  //    title:"Question Form",

  //  })
  

  // Ordering the posts by time at which it was posted

  document.getElementById("first").addEventListener('click',e=>{
    
          
    const query = post.orderByChild('time').limitToLast(100);
    document.getElementById("content").innerHTML=``;
    query.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log(childData.likes);
          // ...
          document.getElementById("content").innerHTML+=childData.inner;
          
      });
      
  });
  
  
  })



//  Ordering the posts by most likes

  document.getElementById("second").addEventListener('click',e=>{
    
          
    const query = post.orderByChild('likes').limitToLast(100);
    document.getElementById("content").innerHTML=``;
    query.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log(childData.likes);
          // ...
          document.getElementById("content").innerHTML+=childData.inner;
          
      });
      
  });
  
  
  })

  
  
  // Adding sharing Feature in Web App

  // Grabbing share icons 
  document.querySelectorAll('.icon-Link').forEach(item => {
    
    //  Adding Event Listeners to share Button
    item.addEventListener('click', event => {
      console.log("Success")
      
      // Grabbing the id in which we have add share options
      let x = document.getElementById("whats")

      // Listing Display options
      if (x.style.display == 'block'){
        x.style.display = 'none';
      }
      else{
        //  Changing Dispaly Options
        x.style.display = 'block';
      }
    })
  })

  