function makeAjaxRequest(){

  if (window.XMLHttpRequest){
      xhr=new XMLHttpRequest();
      xhr.open("GET","counties.json",true);
      xhr.send();
      xhr.onreadystatechange=showContents;


                          }
else if (window.ActiveXObject)
xhr=new ActiveXObject(" Microsoft.XMLHTTP");
else{
document.getElementById("updatemessage").innerHTML="Could not perform stated Request";

                                }
                          }

function showContents(){
if (xhr.readyState==4){
if (xhr.status==200){
let data=JSON.parse(xhr.responseText);
let txt="";

for(let i=0;i<data.counties.length;i++){
 txt +="<tr><td>" + data.counties[i].name + "   "+ data.counties[i].wgs84Lat + "   "+ data.counties[i].wgs84Long+ </td></tr>";
                                       }
document.getElementById("countylist").innerHTML=txt;
}else{
document.getElementById("updatemessage").innerHTML="An error occured:" + xhr.status;
     }
}
}

document.addEventListener('DOMContentLoaded',makeAjaxRequest);

