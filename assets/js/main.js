//Email checking function

function checkEmail(){
let mail = document.reservationForm.mail.value;
reg = mail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/i);
if(mail!=reg){
    document.getElementById("errorMail").innerHTML = "Veuillez entrer une adresse mail valide. <br>";
}
else{
    document.getElementById("errorMail").innerHTML = "";
}
}


//Password checking function

function checkTel(){
    let phone = document.reservationForm.tel.value;
    phone = phone.replace(/[\.,\s]/g, "");
    reg = phone.match(/^(\+33|0033|0)(6|7)[0-9]{8}$/g);
    if(phone != reg){
        document.getElementById("errorTel").innerHTML = "Veuillez entrer un numéro de téléphone valide. <br>";
    }
    else{
        document.getElementById("errorTel").innerHTML = "";
    }
    }


 //Password matching checking function

function emptyMessage(){
    let msag = document.reservationForm.msg.value;
    reg = msag.match(/^[a-z 0-9 -]+$/gmi);
    if(msag != reg){
        document.getElementById("errorMessage").innerHTML = "Vous essayez d'envoyer un message vide ou qui contient des caractères interdits (Ex : #-< ...), veuillez réessayer.<br>";
    }
    else if(msag == null){
        document.getElementById("errorMessage").innerHTML = "Vous essayez d'envoyer un message vide ou qui contient des caractères interdits (Ex : #-< ...), veuillez réessayer.<br>"

    }
    else{
        document.getElementById("errorMessage").innerHTML = "";
    }
    }

//Function that shows form
function showForm() {
    document.getElementById('formula').style.display = "block";
    document.getElementById('infoBox').style.display = "none";
 }

//Function that shows the info
 function showInfo() {
    document.getElementById('formula').style.display = "none";
    document.getElementById('infoBox').style.display = "block";
 }

 