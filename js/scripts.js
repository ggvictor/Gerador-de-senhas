// seleção de elementos
const generatePasswordButton =document.querySelector("#generate-password")
const generatedPasswordElement =document.querySelector("#generated-password")
// funções
const getterLowerCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() *26)+ 97)
}
const getterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() *26)+ 65)
}
const getNumber = () =>{
    return Math.floor(Math.random() *10).toString();
}
const getSymbol = ()=>{
    const symbol ="()[]{}!@#$%¨&*_=++*/.;,?°"
    return symbol[Math.floor(Math.random() * symbol.length)]
}
console.log(getNumber())

// eventos
generatePasswordButton.addEventListener("click", ()=>{
    console.log("teste")
})