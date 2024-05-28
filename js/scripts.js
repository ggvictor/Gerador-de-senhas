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

const generatePassword = (getterLowerCase,getterUpperCase,getNumber,getSymbol) =>{
    let password = "";

    const passwordLength = 10;

    const generators = [
        getterLowerCase,
        getterUpperCase,
        getNumber,
        getSymbol

    ]
    for(i = 0; i < passwordLength; i = i + 4 ){
        generators.forEach(()=>{
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue
        })
    }
    password = password.slice(0, passwordLength);
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password
};

// eventos
generatePasswordButton.addEventListener("click", ()=>{
    generatePassword(
        getterLowerCase,
        getterUpperCase,
        getNumber,
        getSymbol
    );
})