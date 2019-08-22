     
        $(document).ready(function () {
                 $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });

              const useremail = localStorage.getItem("useremail");
              document.getElementById('username').innerHTML=useremail;
                
            // setTimeout(sessionTimeout, 4000);
            // function sessionTimeout(){
            // window.location = "http://127.0.0.1:5500/view/src/index.html";
            // }
        });
 
        
        let username = document.getElementById("username");
        let imageurl = document.getElementById("avat");
        let timer = document.getElementById("timer");
        let logout = document.getElementById("logout");
 //       const tabledist = document.getElementById("dist");
        
        logout.onclick = () =>{

            localStorage.removeItem('access_token');
            localStorage.removeItem('useremail');
             window.location= "http://127.0.0.1:5500/view/src/index.html";
             console.log(localStorage);

        }

        document.getElementById("distb").onclick = ()=>{
            
                document.getElementById("accounts").innerHTML='<object type="type/html" data="index3.html"></object>';
            
          /*    var table ='<div class="wrapper">';
               table +=' <div class="card shadow container-fluid" style="margin:2em; border-block-style: solid; border-color:#92929F; border-radius: 10px; border-style: solid; border-width:.5px; font-size:.8em;">';
                table +='    <div class="title row " style=" background-color:#43425D; border-block-style: solid; border-color:#43425D; border-top-left-radius: 10px; border-top-right-radius: 10px; ">';
                table +='        <div class="col-3" style="margin-top: 12px; padding-top: 0.8em;">';
                table +='            <center>';
                table +='                <span style=" font-weight: 300; color:#fff; margin-left: .3em; font-size: 1.1em;">Registered Accounts</span>';
                table +='            </center>';
                table +='        </div>';
                table +='        <div class="col-6">';
                table +='            <form class="form-inline" style="height: 4.5em; padding-top:5px;">';
                table +='                <i class="fas fa-search" aria-hidden="true" style="color: #fff;"></i>';
                table +='                <input class="shadow-lg form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search">';
                table +='            </form>';
                table +='        </div>';
                table +='        <div class="col-3" style="margin-top: 12px; float:right;">';
               table +='             <center>';
                table +='                <i class="far fa-window-minimize" style="color:#fff; font-size: 1.3em; margin-left:1.3em;"></i>';
                table +='                <i class="fas fa-sync-alt" style="color:#fff; font-size: 1em; margin-left:1.5em; padding-top: 1em;"></i>';
                table +='                <i class="fas fa-expand" style="color:#fff; font-size: 1.3em; margin-left:1.3em;"></i>';
                table +='            </center>';
                table +='        </div>';
                table +='    </div>';
                table +=' <div class="table-responsive" >';
                table +=' <table class="table table-hover table-fixed" style="color:#566787;font-size: 13px; font-family: varela round, sans-serif;">';
                table +='            <!--Table head-->';
                table +='            <thead>';
               table +='                 <tr>';
                table +='                    <th>Image</th>';
                table +='                    <th>Name</th>';
                table +='                    <th>Surname</th>';
                table +='                    <th>Country</th>';
               table +='                     <th>City</th>';
                table +='                    <th>Position</th>';
                table +='                    <th>Age</th>';
                table +='                </tr>';
               table +='             </thead>';
                table +='            <tbody>';
                table +='                <tr>';
                table +='                    <th scope="row"><img id="avat" src="../assets/Retouched-6682@2x.png" alt="" class="img-fluid rounded-circle" width="35em"></th>';
                table +='                    <td>Peter</td>';
                table +='                    <td>Dsvid</td>';
                table +='                    <td>Tanzania</td>';
                table +='                    <td>Iringa</td>';
                table +='                    <td>Advocate</td>';
                table +='                    <td>41</td>';
                table +='                </tr>';
                table +='                <tr>';
                table +='                    <th scope="row"><img id="avat" src="../assets/Retouched-6682@2x.png" alt="" class="img-fluid rounded-circle" width="35em"></th>';
                table +='                    <td>Peter</td>';
                table +='                    <td>David</td>';
                table +='                    <td>Tanzania</td>';
                table +='                    <td>Tanga</td>';
                table +='                    <td>Auditor</td>';
                table +='                    <td>39</td>';
                table +='                </tr>';
                table +='                <tr>';
                table +='                    <th scope="row"><img id="avat" src="../assets/Retouched-6682@2x.png" alt="" class="img-fluid rounded-circle" width="35em"></th>';
                table +='                    <td>Peter</td>';
                table +='                     <td>Shekiondo</td>';
                 table +='                   <td>Tanzania</td>';
                 table +='                   <td>Zanzibar</td>';
                 table +='                   <td>Musician</td>';
                 table +='                   <td>37</td>';
                 table +='               </tr>';
                 table +='               <tr>';
                 table +='                   <th scope="row"><img id="avat" src="../assets/Retouched-6682@2x.png" alt="" class="img-fluid rounded-circle" width="35em"></th>';
                 table +='                   <td>Peter</td>';
                 table +='                   <td>Fahad</td>';
                 table +='                   <td>Tanzania</td>';
                 table +='                   <td>Zanzibar</td>';
                 table +='                   <td>Doctor</td>';
                 table +='                   <td>52</td>';
                 table +='               </tr>';
                 table +='               <tr>';
                 table +='                   <th scope="row"><img id="avat" src="../assets/Retouched-6682@2x.png" alt="" class="img-fluid rounded-circle" width="35em"></th>';
                 table +='                   <td>Peter</td>';
                 table +='                   <td>David</td>';
                 table +='                   <td>Tanzania</td>';
                 table +='                   <td>Dar-es-salaam</td>';
                 table +='                   <td>Mwalimu</td>';
                 table +='                   <td>28</td>';
                 table +='               </tr>';
                 table +='           </tbody>';
                 table +='       </table>';
                 table +='   </div>';
                 table +='   <div class="row">';
                 table +='       <div class="col-6">Showing Page 1 of 1</div>';
                 table +='       <div class="col-6 row" style="padding-left:18em;">';
                 table +='        <!--<div class="col-2">';
                 table +='               <button class="btn pmd-btn-fab pmd-ripple-effect btn-primary" type="button" style="background-color:#43425D; border-radius: 20px; border-color: #43425D"><i class="fas fa-less-than"></i></button></div>';
                 table +='           <div class="col-2" style="font-size: 1.5em; padding-left:1.3em;">';
                 table +='               <center> 1 </center>';
                 table +='           </div>';
                 table +='           <div class="col-2">';
                 table +='               <button class="btn pmd-btn-fab pmd-ripple-effect btn-primary" type="button" style=" background-color:#43425D; border-radius: 20px; border-color: #43425D"><i class="fas fa-greater-than"></i></button>';
                 table +='           </div>-->';
                table +='        </div>';
                table +='    </div>';
               table +=' </div>'; */
                

        //document.getElementById('accounts').innerHTML=table;
        }
        

        function captureFP() {
            CallSGIFPGetData(SuccessFunc, ErrorFunc);
        }        


        function ErrorCodeToString(ErrorCode) {
            var Description;
            switch (ErrorCode) {
                // 0 - 999 - Comes from SgFplib.h
                // 1,000 - 9,999 - SGIBioSrv errors
                // 10,000 - 99,999 license errors
                case 51:
                    Description = "System file load failure";
                    break;
                case 52:
                    Description = "Sensor chip initialization failed";
                    break;
                case 53:
                    Description = "Device not found";
                    break;
                case 54:
                    Description = "Fingerprint image capture timeout";
                    break;
                case 55:
                    Description = "No device available";
                    break;
                case 56:
                    Description = "Driver load failed";
                    break;
                case 57:
                    Description = "Wrong Image";
                    break;
                case 58:
                    Description = "Lack of bandwidth";
                    break;
                case 59:
                    Description = "Device Busy";
                    break;
                case 60:
                    Description = "Cannot get serial number of the device";
                    break;
                case 61:
                    Description = "Unsupported device";
                    break;
                case 63:
                    Description = "SgiBioSrv didn't start; Try image capture again";
                    break;
                default:
                    Description = "Unknown error code or Update code to reflect latest result";
                    break;
            }
            return Description;
        }

        /*
         functions be called if the service sucessfully returns some data in JSON object
        */
        function SuccessFunc(result) {
            if (result.ErrorCode == 0) {
                /* Display BMP data in image div
                BMP data is in base 64 format
                */
                if (result != null && result.BMPBase64.length > 0) {
                    document.getElementById("FPImage").src = "data:image/bmp;base64," + result.BMPBase64;
                }
                
                document.getElementById("verify").onclick = ()=>{
                                       
                    var nidaID = document.getElementById("nidaID").value;

                    if( nidaID.length > 20 && result.TemplateBase64.length > 0){
                  
                  const FPandID = {                    /*object with nida id and fingerprint template base */
                  "nidaID":nidaID,
                  "FPtemplate":result.TemplateBase64,
                  "FPtemplate2":result.TemplateBase64
                  }
                     //  AJAX POST FINGURE PRINT AND IMAGE TOKEN HERE

                    var tbl = "<table border=1>";
                        tbl += "<tr>";
                            tbl += "<td> Serial Number of device </td>";
                            tbl += "<td> <b>" + result.SerialNumber + "</b> </td>";
                            tbl += "<tr>";
                            tbl += "<td> Template(base64)</td>";
                            tbl += "<td> <b> <textarea rows=8 cols=50>" + FPandID.FPtemplate + "</textarea></b></td>";
                            tbl += "</tr>";
                            tbl += "<tr>";
                                tbl += "<td> ID number</td>";
                                tbl += "<td> <b>" + FPandID.nidaID + "</b> </td>";
                                tbl += "</tr>";
                        tbl += "</table>";
                    document.getElementById('resultss').innerHTML = tbl;

                    

                     /*//sending result to php
                     const xhr = new XMLHttpRequest();
                     xhr.open("POST", "dom.php"); //pass the controller directory or file
                     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                     xhr.send(nidaID, result.TemplateBase64);*/
                     
                     
                    }else{
                        alert("check your nida ID");
                    }
                }           

        // -----------------------------------------------------------------------------------  RESULTS TABLE
                /*
                var tbl = "<table border=1>";
                    tbl += "<tr>";
                        tbl += "<td> Serial Number of device </td>";
                        tbl += "<td> <b>" + result.SerialNumber + "</b> </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> Image Height</td>";
                        tbl += "<td> <b>" + result.ImageHeight + "</b> </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> Image Width</td>";
                        tbl += "<td> <b>" + result.ImageWidth + "</b> </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> Image Resolution</td>";
                        tbl += "<td> <b>" + result.ImageDPI + "</b> </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> Image Quality (1-100)</td>";
                        tbl += "<td> <b>" + result.ImageQuality + "</b> </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> NFIQ (1-5)</td>";
                        tbl += "<td> <b>" + result.NFIQ + "</b> </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> Template(base64)</td>";
                        tbl += "<td> <b> <textarea rows=8
                                    cols=50>" + result.TemplateBase64 + "</textarea></b>
                        </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> Image WSQ Size</td>";
                        tbl += "<td> <b>" + result.WSQImageSize + "</b> </td>";
                        tbl += "</tr>";
                    tbl += "<tr>";
                        tbl += "<td> EncodeWSQ(base64)</td>";
                        tbl += "<td> <b> <textarea rows=8
                                    cols=50>" + result.WSQImage + "</textarea></b> </td>
                        ";
                        tbl += "</tr>";
                    tbl += "</table>";
                document.getElementById('result').innerHTML = tbl;
                */

            } else {
                alert("Fingerprint Capture Error Code: " + result.ErrorCode + ".\nDescription: " +
                    ErrorCodeToString(result.ErrorCode) + ".");

            }
        }

        function ErrorFunc(status) {
            /*
            If you reach here, user is probabaly not running the
            service. Redirect the user to a page where he can download the
            executable and install it.
            */
            alert("Check if SGIBIOSRV is running; Status = " + status + ":");

        }

        function CallSGIFPGetData(successCall, failCall) {
            // 8.16.2017 - At this time, only SSL client will be supported.
            var uri = "https://localhost:8443/SGIFPCapture";


            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    fpobject = JSON.parse(xmlhttp.responseText);
                    successCall(fpobject);
                    } else if (xmlhttp.status == 404) {
                    failCall(xmlhttp.status)
                }
            }
            var params = "Timeout=" + "10000";
            params += "&Quality=" + "50";
            // params += "&licstr=" + encodeURIComponent(secugen_lic);
            params += "&licstr=" + "";
            params += "&templateFormat=" + "ISO";
            params += "&imageWSQRate=" + "0.75";
            console.log
            xmlhttp.open("POST", uri, true);
            xmlhttp.send(params);

            xmlhttp.onerror = function () {
                failCall(xmlhttp.statusText);
            }
        }
    