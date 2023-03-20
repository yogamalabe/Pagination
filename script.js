var tbody=document.getElementById("tbody");
function displaydata(attrvalue){
    var request=new XMLHttpRequest();
    request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    request.send();
    request.onload=function(){
        var result=JSON.parse(request.response);
        if(attrvalue=="one"){
            deletepreviousdata() 
            displayrange(result,0,10);
        }
        else if(attrvalue=="two"){  
            deletepreviousdata() 
            displayrange(result,10,20);
        }
        else if(attrvalue=="three"){
            deletepreviousdata() 
            displayrange(result,20,30);
        }
        else if(attrvalue=="four"){
            deletepreviousdata() 
            displayrange(result,30,40);
        }
        else if(attrvalue=="five"){
            deletepreviousdata() 
            displayrange(result,40,50);
        }
        else if(attrvalue=="six"){
            deletepreviousdata() 
            displayrange(result,50,60);
        }
        else if(attrvalue=="seven"){
            deletepreviousdata() 
            displayrange(result,60,70);
        }
        else if(attrvalue=="eight"){
            deletepreviousdata() 
            displayrange(result,70,80);
        }
        else if(attrvalue=="nine"){
            deletepreviousdata() 
            displayrange(result,80,90);
        }
        else if(attrvalue=="ten"){
            deletepreviousdata() 
            displayrange(result,90,100);
        }
    }  
}

function displayrange(array,start,end){
    for (var i=start;i<end;i++){
        displaytable(array[i].id,array[i].name,array[i].email);
    }
}

function displaytable(id,name,email){
tbody=document.getElementById("tbody");
var tablerow=document.createElement("tr");
var td1=document.createElement("td");
var td2=document.createElement("td");
var td3=document.createElement("td");
    td1.innerHTML=id;
    td2.innerHTML=name;
    td3.innerHTML=email;
    tablerow.append(td1);
    tablerow.append(td2);
    tablerow.append(td3);
    tbody.append(tablerow);
}

function deletepreviousdata(){
   tbody.innerHTML=" ";
}
