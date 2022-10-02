
let users = [];
//pegando o sessionStorage
let usersString = sessionStorage.getItem('users');
// transformar em array de objeto novamente
users = JSON.parse(usersString);
function cadastrar() {
    event.preventDefault()
    var valueEmail = document.querySelector("#cadastro-email").value
    var valueSenha = document.querySelector("#cadastro-senha").value
    var valueConfirSenha = document.querySelector("#cadastro-confirmar-senha").value

    if(valueSenha!=valueConfirSenha){
        document.querySelector("#cadastro-confirmar-senha").style.borderColor = "#C72C2C"
        document.querySelector("span#cadastro-confirmar-senha").innerHTML = "As senhas informadas não coincidem"
    }
    
    else{
        document.querySelector("#cadastro-confirmar-senha").style.borderColor = "#BDBDBD"
        document.querySelector("span#cadastro-confirmar-senha").innerHTML = ""
        
            let user ={
                "email": valueEmail,
                "senha": valueSenha
            }

            users.push(user)

            sessionStorage.setItem('users', JSON.stringify(users))
            document.querySelector("#cadastro-email").value = ''
            document.querySelector("#cadastro-senha").value =''
            document.querySelector("#cadastro-confirmar-senha").value =''
            window.location.href = '/login'
    }
}
function possuiConta(){
    window.location.href = '/login'
}