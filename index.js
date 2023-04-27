
// const form = document.querySelector("form");
// form.addEventListener('submit', e=> {
//     if(!form.checkValidity()){
//         e.preventDefault()
//     }
//     form.classList.add('was-validated')
// })

// function book(){
    
    
// }

const btn=document.querySelector("button");
const input=document.querySelectorAll("input");
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(input[0].value==='' || input[1].value === ''){
        alert("Please enter all fields.");
    }
    else{
        console.log(input[0].value,input[1].value);
    }
})

btn.addEventListener('onmouseover', (e)=>{
    e.preventDefault();
    btn.style.color="red";
});
