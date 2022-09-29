
let users = [
    {
        "email": "teste@teste.com",
        "senha": "1234",
    },
]
function cadastrar() {
    sessionStorage.setItem('users', JSON.stringify(users))
    event.preventDefault()
    let url = "/cadastrar"
    var valueEmail = document.querySelector("#cadastro-email").value
    var valueSenha = document.querySelector("#cadastro-senha").value
    var valueConfirSenha = document.querySelector("#cadastro-confirmar-senha").value

    

    console.log(valueEmail, valueSenha, valueConfirSenha)
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
            
            console.log(users)
            sessionStorage.setItem('users', JSON.stringify(users))
            document.querySelector("#cadastro-email").value = ''
            document.querySelector("#cadastro-senha").value =''
            document.querySelector("#cadastro-confirmar-senha").value =''
        window.location.href = '/index'
    }

}