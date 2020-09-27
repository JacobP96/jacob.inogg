// kör välkomstsidan
printwelcomepage();

if (localStorage.getItem("userID") !=="null"){
    printloggin(); 

}else{
    printwelcomepage();
}

//funktion för att logga in med användarnamn och lösenord
function password() {



    u = document.getElementById("username").value;
    p = document.getElementById("pass").value;

    console.log(u);
    console.log(p);

// händelser när man loggar in med rätt uppgifter
if  (u == "test" && p=="1234") {
console.log("ja det stämmer");

localStorage.setItem("userID", u);
console.log(localStorage.getItem("userID"));

    printloggin();
}
    else {
    printerrorpage();
        }
}
 


 // skapar välkomst sida
 function printwelcomepage(){
    document.getElementById("Svar").innerHTML = "Logga in";
    
    }
   
// skapar inlogg sida

function printloggin(){
    document.getElementById("tillbaka").innerHTML = "Du är nu inloggad";
    username.remove();
    pass.remove();
    knapp.remove();
    header.remove();
    Svar.remove();
}

// skapar en error sida
function printerrorpage(){
    document.getElementById("header").innerHTML = "Fel användarnamn eller lösenord";
    username.remove();
    knapp.remove();
    pass.remove();
    Svar.remove();
}