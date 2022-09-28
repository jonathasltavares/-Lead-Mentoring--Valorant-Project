
const botao = document.querySelector(".cadastro-button")
botao.addEventListener("click", cadastrar)


function cadastrar() {
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

        const users = [
            {
                "email": "teste@teste.com",
                "senha": "1234",
            },
        ]
        function setUser(vEmail, vSenha){
            let user ={
                "email": vEmail,
                "senha": vSenha
            }
            users.push(user)
            
            console.log(users)
        }
        setUser(valueEmail, valueSenha)
        
    }

}