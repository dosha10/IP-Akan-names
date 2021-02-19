var CC, YY, MM, DD, d, dayValue, newName;
var result = document.getElementById("result")
var dayNames = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturaday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var getGender = () => {
    if (document.getElementById("male").checked) {
        return document.getElementById("male").value;
    }
    if (document.getElementById("female").checked) {
        return document.getElementById("female").value;
    }
    return false;
};

var myForm = document.querySelector("#myform")
myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var DOB = myForm.elements.DOB.value
    let dobArray = DOB.split("-");
    YY = dobArray[0];
    MM = dobArray[1] - 1;
    DD = dobArray[2];
    var date = new Date(YY, MM, DD);
    dayValue = date.getDay();
    if (getGender() === "male") {
        newName = maleNames[dayValue]
        result.innerText = "your new name " + newName
    }
    if (getGender() === "female") {
        newName = femaleNames[dayValue]
        result.innerText = "your new name " + newName
    }




})