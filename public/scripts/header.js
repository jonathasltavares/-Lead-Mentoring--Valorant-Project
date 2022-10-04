window.onload=function(){
    const Bttnincrement = document.querySelector("#Bttnincrement")
    const Bttndecrement = document.querySelector("#Bttndecrement")
    const Bttnrecovery = document.querySelector("#Bttnrecovery")
    const Bttnlogout = document.querySelector("#Btnnlogout")
}
const html = document.getElementsByTagName('html')[0]
const normalSize = 16
var currentSize = 16
function logout(){
    window.location.href = '/login'
}

let alo;
Bttnincrement.onclick = incremetFontSize
function incremetFontSize(){
    if(currentSize<22){
        currentSize+=2
        setCurrentSize(currentSize)
    }

}

Bttndecrement.onclick = decremetFontSize
function decremetFontSize(){
    if(currentSize>10){
        currentSize-=2
        setCurrentSize(currentSize)
    }
}
Bttnrecovery.onclick = resetFontSize
function resetFontSize(){
    currentSize = normalSize
    setCurrentSize(currentSize)
}

function setCurrentSize(currentSize){
    html.style.fontSize = `${currentSize}px`
    console.log(currentSize)
}

Bttnlogout.addEventListener("click", logout)

