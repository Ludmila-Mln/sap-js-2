let clickCount = 0;


let button = document.querySelector("#myButton");

button.addEventListener("click", ()=>{
    clickCount = clickCount + 1;
    console.info("Got one!", clickCount);
})

