

//pegando o sessionStorage
let usersString = sessionStorage.getItem('users');
// transformar em array de objeto novamente

usersArray = JSON.parse(usersString);


function logar(){
    var loginEmail = document.querySelector("#login-email").value
    var loginSenha = document.querySelector("#login-senha").value
    event.preventDefault()
    var  usuarioEncontrado = new Boolean(false)
    //procurando pelo email
    for(var i=0; i<usersArray.length; i++){
        if(usersArray[i].email === loginEmail){
            if(usersArray[i].senha === loginSenha){
                usuarioEncontrado = true
                //achou o email e a senha corresponde ao email encontrado = login
                window.location.href = '/index'
            }else{
                //achou o email mas a senha não corresponde ao email encontrado = senha incorreta]
                //esse codigo ta informando que usuario ou senha ta errado
                document.querySelector("#confirmar-usuario-senha-login").innerHTML = "Email e/ou Senha inválido(s)"
            }
        }   
    }
    //não encontrou o email
    if(usuarioEncontrado==false){
        //esse codigo faz a mesma coisa de quando a senha ta errada
        document.querySelector("#confirmar-usuario-senha-login").innerHTML = "Email e/ou Senha inválido(s)"

    }
}

function criarConta(){
    window.location.href = '/cadastro' //leva para a pagina de cadastro
}