const input = document.querySelector("input");
const button = document.querySelector("button");
const results = document.querySelector("#result");
const display = document.querySelector(".result");
const URL = "http://numbersapi.com";

let string = "";
const rel = async () => {
	string = input.value;
	if(isNaN(string)){
		alert("Please input a number!");
	}
	else if(string == ""){
		alert("Please input a number!");
	}
	else{
		const response = await fetch(`${URL}/${string}`);
		const data = await response.text();
		results.innerText = data;
		display.classList.add("resultAfter")
		display.classList.remove("result")
	}
	
}
button.addEventListener("click", rel)
input.addEventListener("keypress", function(event){
	if(event.key === "Enter"){
        rel();
    }
})