
// variabler för användare och lösenord
var user ="test";
var password ="1234";


var page = document.getElementById("content");

// om du inte är inloggas visas welcomepage om du är inloggad visas login page
if(localStorage.getItem("userId") !== "null"){
    printMeWelcomepage();
}else{
    printLogInPage();
}

// funktion för välkommst sidan
function printMeWelcomepage(){
    page.innerHTML = "hej och välkommen";
    page.insertAdjacentHTML("beforeend", "<div><button id= 'loggoutButton'>logga ut</button></div>")

    var loggoutButton = document.getElementById("loggoutButton");

    loggoutButton.addEventListener("click", function(){
        localStorage.removeItem("userId");
        printLogInPage();
    });


}
// skapar error sidan
function printErrorPage(){
    page.insertAdjacentHTML("afterbegin","<div> Har du glömt ditt lösenord?</div>")
}
// skapar login sidan,
function printLogInPage(){

// columnerna med användarnamn, lösenord och en logga in knapp
    page.innerHTML = "";
    page.insertAdjacentHTML("afterbegin",'<input type="text" id="user" placeholder="Användarnamn"> <br/> <br/> <input type="password" id="password" placeholder="Lösenord"> <br/> <br/><button id="spara">Logga in');
    var loginButton = document.getElementById("spara");

    // funktion, om man skriver rätt lösenord och användarnamn så loggas man in och infon spars i local storrage, annar hamnar du på error sidan
loginButton.addEventListener("click", function(){
    console.log("Knapp")

    var u = document.getElementById("user").value
    var p = document.getElementById("password").value

    if (u == user && p == password){
        
// infon sparas i local storage och du kan fortsätta att vara inloggad
        localStorage.setItem("userId", u);
        console.log(localStorage.getItem("userId"));
        

        printMeWelcomepage();
    }else{
        
        printErrorPage();
    }
});

}