var button = document.getElementById("generate");
var foto = document.getElementById("img");
var nome = document.getElementById("nome");
var cognome = document.getElementById("cognome");
var email = document.getElementById("email");

function generateUser() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", 'https://randomuser.me/api/?gender=female');
    xhr.send();
    xhr.onload = function () {
        var text = xhr.response
        var obj = JSON.parse(text);
        var user = obj.results[0];
        displayUser(user);
    }
}

function displayUser(user){
    foto.src = user.picture.medium
    nome.innerHTML = user.name.first;
    cognome.innerHTML = user.name.last;
    email.innerHTML = user.email;
}


button.addEventListener('click', generateUser);