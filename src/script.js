const buttons = document.querySelectorAll(".btn");
const input = document.querySelector("input");

let value = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    try {
    if(e.target.innerText === "DEL"){
         value = input.value.toString().slice(0,-1)
         input.value = value
    }
  else if (e.target.innerText === "RESET") {
      input.value = "";
      value = "";
    }
    
    else if(e.target.innerText === "="){
            input.value = eval(input.value)
            value = input.value
    }
  

    else {
      value += e.target.innerText;
      input.value = value;
    }
  }
  catch(err){
    alert("Please use valid expression")
    value = ''
    input.value = value
  }
  });

});

