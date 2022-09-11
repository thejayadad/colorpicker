
let colorInput = document.getElementById("color");
colorInput.addEventListener("input", () => {
    let colorCode = document.getElementById("color").value;
    document.getElementsByTagName("body")[0].style.backgroundColor = colorCode;
    document.getElementsByTagName("label")[0].style.backgroundColor = colorCode; 
})