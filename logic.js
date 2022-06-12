let username = document.getElementById("user")
let password = document.getElementById("pass")

// let message = document.getElementById("empty")
// Create a password validation form with CSS and JavaScript 
// (Create a form with username and password; 
// Validate password - at least one caps letter, 
// minimum length 8, 1 special character, no numbers;) 
// Display password strength ; Display error message during validation)


password.addEventListener("input",()=>{
    let x = document.getElementById("caps")
    let y = document.getElementById("symbol")
    let z = document.getElementById("char")
    let u = document.getElementById("empty")
    let v = document.getElementById("nums")

    if(username.value.trim()=="" || password.value.trim() == "" ){
        // u.style.visibility="visible"
        alert("Please enter values...")
    } 
    else{
        u.style.visibility="hidden"
    if(password.value.match(/[A-Z]/)){
                x.style.visibility = "visible";
                x.style.color = "green"
            }
            else{
                x.style.visibility = "visible";
                x.style.color = "red"
            }

    if(password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\{\}\[\]\.\,\>\<]/)){
        y.style.visibility="visible"        
        y.style.color = "green"
        }
        else{
            y.style.visibility="visible"
            y.style.color = "red"
            }

    if(password.value.length >8){
        z.style.visibility = "visible"
        z.style.color="green"
        }
        else{
            z.style.visibility = "visible"
            z.style.color="red"
            }
    
    if(password.value.match(/[0-9]/)){
        v.style.visibility="visible"
        v.style.color="red"
    }
    else{
        v.style.visibility="visible"
        v.style.color="green"
    }
    
}

// 
}) 

function validate(){
    if(password.value.match(/[A-Z]/) && password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\{\}\[\]\.\,\>\<]/) &&  password.value.length >8 && !password.value.match(/[0-9]/)){
        window.location.href="main.html"
    }
    else{
        window.location.href = "index.html"
    }
    
}
    

let msg = document.getElementById("msg")
let str = document.getElementById("str")

password.addEventListener("input",()=>{
    if(password.value.length>0){
        str.style.display="block"
    }
    else{
        str.style.display="none"
    }
    if(password.value.length < 4){
        msg.innerHTML="weak"
        password.style.borderColor = "red";
        str.style.color="red"
    }
    else if(password.value.length>=5 && password.value.length<10 && password.value.match(/[A-Z]/)){
        msg.innerHTML="medium"
        password.style.borderColor="orange";
        str.style.color="orange"
    }
    else if(password.value.length>=10 && password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\{\}\[\]\.\,\>\<]/)){
        msg.innerHTML="strong"
        password.style.borderColor="green";
        str.style.color="green"
    }
})