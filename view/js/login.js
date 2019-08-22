  //.... Index.html
  const login = document.getElementById('login') ;
  
         
  login.onclick= (e) => {
          e.preventDefault();
          var name = document.getElementById('username').value;
          var password = document.getElementById('password').value;

          if (name.length == 0) {
            alert ("user name cant be ampty");

          }else if (password.length == 0) {
               alert ("password cant be empty");
            } else {
                var cbxsys = {
                             "url": "http://34.67.204.254/oauth/tokn",
                             "method": "POST",
                             "timeout": 0,
                             "headers": {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                             },
                              "data": "{\n   \"grant_type\":\"password\",\n   \"client_id\": \"2\",\n   \"client_secret\":\"3tfwMd1FtRSsnLmrgQwe99Bs8aAc87CGV1dan5JD\",\n   \"username\":\""+name+"\",\n   \"password\":\""+password+"\",\n   \"scope\":\"*\"\n}",
                          };
            $.ajax(cbxsys).done(function (sysres, status) {
            if (status == 200) {
              alert("200");
              var resptoken = sysres.access_token;
              var localstorage = localStorage.setItem("access_token",resptoken);
                     var cbxuser = {
                           "url": "http://34.67.204.254/api/key/d3f8579bc75c8e02f896b0ef905bc83d43534700",
                            "method": "GET",
                            "timeout": 0,
                           "headers": {
                              "Accept": "application/json",
                              "Content-Type": "application/json",
                              "Authorization": "Bearer "+resptoken+""
                            },
                          };
          
                          //ajax HTTP request with .done and .fail
               $.ajax(cbxuser).done(function (userres, status) {
                  if (status == 200) {
                    var user = localStorage.setItem("useremail",userres.email);
                      // window.location= "http://127.0.0.1:5500/view/src/index2.html";
                  } else {
                    alert ("Cant log you in. Check your username or password ");
                  }                    
                });                

            } else {
                alert ("failed");
              // alert(status);
            }
          }).fail(function()  {
             alert("Sorry. Server unavailable.");
              });                    
            }
        }



//----------------------------------------------------------------------------------------------------------------------------------------//

       /*     if (localStorage.length == 0) {
                
          //const url ="https://535534e9-97db-4a1a-8474-f16a18e97d11.mock.pstmn.io/ekycapi/authUser";
           const url = "http://34.67.204.254/oauth/token";

            var cbx = new XMLHttpRequest();
            console.log(XMLHttpRequest.state);
           
           const cbxData = { 
                            "grant_type":"password",
                            "client_id": "2",
                              "client_secret":"dJThew6tGluaBwfU6mfNFHCz9xblqjtSohfBQISh",
                              'username':name,
                              'password':password, 
                                 "scope":"*"
                             }  
            console.log(cbxData);

            cbx.open('POST', url, true); //pass the controller directory or file
           console.log(XMLHttpRequest.state);            

            cbx.setRequestHeader("accept", "application/json"); //token header
            console.log(XMLHttpRequest.state);     
            
          //  cbx.setRequestHeader("Access-Control-Allow-Origin", "*");
          //  cbx.setRequestHeader("X-Requested-With", "XMLHttpRequest");

            cbx.setRequestHeader("Content-Type", "application/json");
            console.log(XMLHttpRequest.state);            

              cbx.send(cbxData); 
            
         // cbx.setRequestHeader("authorization", "");

            cbx.onreadystatechange = processRequest;
            function processRequest(e) {
                if ( this.status == 200){

                   const response = JSON.parse(cbx.responseText);
                    // const user = {
                    //     'fname':response.user.fname,
                    //     'lname':response.user.lname,
                    //     'Image':response.user.photo,
                    //     'Emal':response.user.email
                    // };
        
                   localStorage.setItem('user', JSON.stringify(response));
                   localStorage.setItem('user2', "user");
               //  const userobj = localStorage.getItem('user');
              //   const luser = JSON.parse(userobj);                // Getting Token iterm        
                   
                   window.location= "http://127.0.0.1:5500/view/src/index2.html";
                                       
                }else{
                    alert("make sure the username or password is correct"); // debug
                }
            } 
                
            } else {
                console.log("isbt");
                
                window.location= "http://127.0.0.1:5500/view/src/index2.html";
            
            }
    }
    */


    //.... Index2.html
    
  /*  login.onclick= () => {

             //   const url ="https://535534e9-97db-4a1a-8474-f16a18e97d11.mock.pstmn.io/ekycapi/authUser";

                 if (localStorage.length == 0) {

                   const url = "http://34.67.204.254//oauth/token";

                    const cbxData = {  // Encription
                         "grant_type":"password",
                         "client_id": "2",
                         "client_secret":"dJThew6tGluaBwfU6mfNFHCz9xblqjtSohfBQISh",
                         "scope":"*",
                       'username':name,
                          'password':password,
                          }  
                          console.log(cbxData);
                          
                   function doRequest(urls, callback) {
                   var xmlhttp =  new XMLHttpRequest() ; //Openning Request
                    
                   console.log(urls);
                    
                           xmlhttp.open("POST", urls, true); // for async
                           console.log(XMLHttpRequest.statusText);
                           xmlhttp.setRequestHeader("accept", "application/json"); //token header
                           console.log(XMLHttpRequest.statusText);            
                           xmlhttp.setRequestHeader("Content-type", "application/json");
                           console.log(XMLHttpRequest.statusText);            
                    
                   xmlhttp.onreadystatechange=function() {     
                       if (xmlhttp.readyState==4) {
                           if (xmlhttp.status == 200) {

                               // passing the response to the callback function
                               callback(null, JSON.parse(xmlhttp.responseText));
                                
                            } else {
                            
                                // passing the error to the callback function
                                callback(xmlhttp.statusText);
                                alert("make sure the username or password is correct");
                            }
                        }
                   }
                   xmlhttp.send(cbxData);
                }

                doRequest(url , function(err, response) { // passing an anonymous function
                   if (err) {
                      alert('Error: ' + err);

                  } else {

                       //window.location= "http://127.0.0.1:5500/view/src/index2.html";
                      alert('Response: ' + response);
                      console.log(response);
                      
                   // window.location= "http://127.0.0.1:5500/view/src/index2.html";

                       
                    // const user = {
                    //     'fname':response.user.fname,
                    //     'lname':response.user.lname,
                    //     'Image':response.user.photo,
                    //     'Emal':response.user.email
                    // };
        
                   localStorage.setItem('user', JSON.stringify(response));
                   localStorage.setItem('user2', "user");
               //  const userobj = localStorage.getItem('user');
              //   const luser = JSON.parse(userobj);                // Getting Token iterm 

                  } 
                });
                 } else {
                        window.location= "http://127.0.0.1:5500/view/src/index2.html";
                 }
            }



            ---------------- check for internet connection -----------------
              var checkStatus = function() {
  if (navigator.onLine) {
    document.body.innerHTML = "YAY! you're online!!!!!"
  } else {
    document.body.innerHTML = "aww you're offline :("
  }
}
checkStatus()

window.addEventListener("online", function() {
  checkStatus()
})
window.addEventListener("offline", function() {
  checkStatus()
})
            */