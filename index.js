
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
var itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);

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
       //create key label
        var key = document.createElement("LABEL");
        var keyText = document.createTextNode(input[1].value);
        key.setAttribute("for", "key");
        key.appendChild(keyText);

        //create val label
        var val = document.createElement("LABEL");
        var valText = document.createTextNode(" "+input[2].value);
        val.setAttribute("for", "val");
        val.appendChild(valText);
        
        //create button delete

        var but=document.createElement("button");
        but.appendChild(document.createTextNode('X'));
        but.className="btn btn-danger btn-sm float-right delete";

        //create button edit

        var but1=document.createElement("button");
        but1.appendChild(document.createTextNode('Edit'));
        but1.className="btn btn-success btn-sm float-right edit";
        
        var list=document.createElement("li");
        list.className="list-group-item";
        list.appendChild(key);
        list.appendChild(val);
        list.appendChild(but);
        list.appendChild(but1);

        itemList.appendChild(list);


        
        //document.getElementById("myForm").insertBefore(x,document.getElementById("male"));

        


    }
})


function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        console.log(li.firstElementChild.innerHTML);
        localStorage.removeItem(li.firstElementChild.innerHTML);
        itemList.removeChild(li);
      }
    }

    if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        let Obj_deserialize=JSON.parse(localStorage.getItem(li.firstElementChild.innerHTML));
        console.log(Obj_deserialize.Email);
        input[0].value=Obj_deserialize.name;
        input[1].value=Obj_deserialize.Email;
        input[2].value=Obj_deserialize.Contact;
        input[3].value=Obj_deserialize.DateTime;
        localStorage.removeItem(li.firstElementChild.innerHTML);
        itemList.removeChild(li);
    }
  }


// btn.addEventListener('onmouseover', (e)=>{
//     e.preventDefault();
//     btn.style.color="red";
// });



