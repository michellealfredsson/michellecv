let subject = "JavaScript";
console.log("Hello " + subject);
let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");
let age = document.getElementById("age");
let testAge = document.getElementById("testAge");
let content = document.getElementById("content");
colorBtn.addEventListener("click", (e) => {
    console.log("klick på knapp")
    let chosencColor = chooseColor.value;
    console.log(chosencColor);
    document.body.style.backgroundColor=chosencColor
})
testAge.addEventListener("click", (e)=> {
    let getAge = age.value;
    console.log("age" + getAge);
    let yearsleft = 18 - getAge;
if (getAge < 18) {console.log("Mindre än 18")
content.innerText = "Sorry, kom tillbaks om " + yearsleft + " år!";
} else {
console.log("Större än 18")
content.innerText = "Vassego ta en Öl";
}
})