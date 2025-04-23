//your JS code here. If required.
const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const div = document.getElementById("output");
function display(){
	return new Promise((resolve)=>{
		let value = parseInt(input.value.trim());
		setTimeout(()=>resolve(value),2000);
	})
}
function multiply(data){
	return new Promise((resolve)=>{
		setTimeout(()=>resolve(data*2),2000);
	})
	
}
function subtract(data){
	return new Promise((resolve)=>{
		setTimeout(()=>resolve(data-3),1000);
	})
}
function divide(data){
	return new Promise((resolve)=>{
		setTimeout(()=>resolve(data/2),1000);
	})
}
function additon(data){
	return new Promise((resolve)=>{
		setTimeout(()=>resolve(data+10),1000);
	})
}

btn.addEventListener("click",()=>{
	display().then((data)=>{
		div.textContent=`Result: ${data}`;
		return multiply(data);
	}).then((data)=>{
		div.textContent=`Result: ${data}`;
		return subtract(data);
	}).then((data)=>{
		div.textContent=`Result: ${data}`;
		return divide(data);
	}).then((data)=>{
		div.textContent=`Result: ${data}`;
		return additon(data);
	}).then((data)=>div.textContent=`Result: ${data}`);
});