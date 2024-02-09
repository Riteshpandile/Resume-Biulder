function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
 function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",4);
    newNode.setAttribute("placeholder", "Enter here");
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
 }
 //generating cv
 function generateCV()
 {
    //console.log("generating cv")//
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;
document.getElementById('nameT2').innerHTML=namefield;

//contact//

let contactfield = document.getElementById("contactfield").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactfield;

    /Address/
 
    let addressfield = document.getElementById("addressfield").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressfield;

    /fb link/

    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML = fbField;

    let instaField = document.getElementById("instaField").value;
    let instasT = document.getElementById("instaT");
    instaT.innerHTML = instaField;

    let linkedField = document.getElementById("linkedField").value;
    let linkedT = document.getElementById("linkedT");
    linkedT.innerHTML = linkedField;

    let ObjectiveField = document.getElementById("ObjectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = ObjectiveField;

    //work experience//
 let wes = document.getElementsByClassName("weField");
 let str="";
  for (let e of wes)
  {
    str = str + `<li> ${e.value} </li>`;
  }
 document.getElementById('weT').innerHTML = str;

// academics field//

let aqs = document.getElementsByClassName("aqField");
 let str1="";
  for (let e of aqs)
  {
    str1 = str + `<li> ${e.value} </li>`;
  }
 document.getElementById('aqT').innerHTML = str1;

 let prjField = document.getElementById("prjField").value;
 let projectT = document.getElementById("projectT");
 projectT.innerHTML = prjField;

 //code for setting image
 let file=document.getElementById('imgfield').files[0]
 console.log(file);

 let reader=new FileReader()
 reader.readAsDataURL(file);
 console.log(reader.result);
//set the image to template
reader.onloadend=function()
{
  document.getElementById("imgTemplate").src = reader.result;
}

 document.getElementById('cv-form').style.display='none';
 document.getElementById('cv-template').style.display='block';

}

function printCV() {
     window.print();
 }