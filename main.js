var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturaday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Yaa", "Ama"];


var myForm = document.querySelector("#myform")
myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var DOB = myForm.elements.DOB.value
    let dobArray = DOB.split("-");
    YY = dobArray[0];
    MM = dobArray[1] - 1;
    DD = bodArray[2]

})