//login

let users = [
    {
        "email": "teste@teste.com",
        "senha": "1234",
    },
    {
        "email": "lala@teste.com",
        "senha": "1234",
    },
]

sessionStorage.setItem('users', JSON.stringify(users))

//pegando o sessionStorage
let usersString = sessionStorage.getItem('users');
// transformar em array de objeto novamente
let usersArray = JSON.parse(usersString);

function logar(){
    var  usuarioEncontrado = new Boolean(false)
    //procurando pelo email
    for(var i=0; i<usersArray.length; i++){
        if(usersArray[i].email === valueEmail){
            if(usersArray[i].senha === valueSenha){
                usuarioEncontrado = true
                //achou o email e a senha corresponde ao email encontrado = login
                window.location.href = 'index'
            }else{
                //achou o email mas a senha não corresponde ao email encontrado = senha incorreta]
                //esse codigo ta informando que usuario ou senha ta errado
                document.querySelector("confirmar-usuario-senha-login").innerHTML = "Email e/ou Senha inválido(s)"
            }
        }   
    }
    //não encontrou o email
    if(usuarioEncontrado==false){
        //esse codigo faz a mesma coisa de quando a senha ta errada
        document.querySelector("confirmar-usuario-senha-login").innerHTML = "Email e/ou Senha inválido(s)"
    }
}

function criarConta(){
    window.location.href = 'cadastro' //leva para a pagina de cadastro
}