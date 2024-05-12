const generator1 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const generator2 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
const generator3 = "123456789"
const generator4 = "~!@#$%&=+"

const arr = Array.of(Array.from(generator1),Array.from(generator2),Array.from(generator3),Array.from(generator4),);


generatePass = () =>{
   let password = "";
   for(let i=0;i<4;i++){
    let inner = Math.floor(Math.random()*(arr[i].length));
    password = password + arr[i][inner];
   }
    for(let i=0;i<7;i++){
        let outer = Math.floor(Math.random()*4);
        let inner = Math.floor(Math.random()*(arr[outer].length));
        password = password + arr[outer][inner];
    }
    // console.log(password);
    return password
}
// generatePass();


const button = document.querySelector('.button');
const input = document.querySelector('.password');

button.addEventListener('click',(e)=>{
   let passKey = generatePass();
   input.innerHTML = passKey;

})


const copy = document.querySelector('.passwordBox i');


copyText=(text)=>{
   let textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

copy.addEventListener('click',(e)=>{
    // document.execCommand('copy');
    
    copyText(input.innerText);

    alert('Text copied to clipboard: ');
})