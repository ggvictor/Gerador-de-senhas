// seleção de elementos
const generatePasswordButton =document.querySelector("#generate-password")
const generatedPasswordElement =document.querySelector("#generated-password")

// Novas funcionalidades
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")
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

    // Segunga Versão
    const passwordLength = +lengthInput.value;

    const generators = [];

    if(lettersInput.checked){
        generators.push(getterLowerCase,getterUpperCase)
    }
    if(numbersInput.checked){
        generators.push(getNumber)
    }
    if(symbolsInput.checked){
        generators.push(getSymbol)
    }
    if(generators.length === 0){
        return;
    }

    for(i = 0; i < passwordLength; i = i + generators.length ){
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
openCloseGeneratorButton.addEventListener("click",()=>{
    generatePasswordContainer.classList.toggle("hide")
});

// ctrl c 

copyPasswordButton.addEventListener("click",(e)=>{
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerText
    
    navigator.clipboard.writeText(password).then(()=>{
        copyPasswordButton.innerText = "Senha copiada com sucesso!"

        setTimeout(()=>{
            copyPasswordButton.innerText = "Copiar"
        },1000)
    })
})