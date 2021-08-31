let clickCount = 0;
let button = document.querySelector("#myButton");

button.addEventListener("click", ()=>{
    clickCount = clickCount + 1;
    let text = document.getElementById("myPoints");
    text.value = clickCount;
})

