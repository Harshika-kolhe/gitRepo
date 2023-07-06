
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
        //gitconsole.log(input[0].value,input[1].value);
        // localStorage.setItem('name',input[0].value);
        // localStorage.setItem('Email',input[1].value);
        // localStorage.setItem('Contact',input[2].value);
        // localStorage.setItem('DateTime',input[3].value);
        let obj={
            name:input[0].value,
            Email:input[1].value,
            Contact:input[2].value,
            DateTime:input[3].value
        };

       // localStorage.setItem('MyObj',obj);

        let obj_serialize=JSON.stringify(obj);
        console.log(obj_serialize);
        localStorage.setItem(obj.Email,obj_serialize);

        let Obj_deserialize=JSON.parse(localStorage.getItem('MyObj'));


    }
})

// btn.addEventListener('onmouseover', (e)=>{
//     e.preventDefault();
//     btn.style.color="red";
// });



