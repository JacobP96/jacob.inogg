

// se om användaren är inloggad
function localStorage(){ 
    if(localStorage.getItem("username", "pass") !== null ){
        //vad ska vissas om användaren inte är inloggad
        printwelcomepage();
    
    } else{
        //vad ska visas som användaren är inloggad
        printloggin();
    }}


//funktion för att logga in med användarnamn och lösenord
function password() {



    u = document.getElementById("username").value;
    p = document.getElementById("pass").value;

    console.log(u);
    console.log(p);

// händelser när man loggar in med rätt uppgifter
if  (u == "test" && p=="1234") {

    printloggin();
}
    else {
    printerrorpage();
        }
}
 // kör välkomstsidan
 printwelcomepage();


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

// function för logga ut knappen
var loggaut = document.getElementById("loggaut");

loggaut.addEventListener("click",function(){



    if (loggaut){
        printwelcomepage()
    }
})

   



  

    








    

